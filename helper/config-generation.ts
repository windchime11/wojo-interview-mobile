import { Combination } from "@/types/room-type"

const configsFor1 : Combination[] = [{ S: 1 }]
const configsFor2 : Combination[] = [{ S: 2 }, { D: 1 }]
const configsFor3 : Combination[] = [{ S: 3 }, { S: 1, D: 1 }, { F: 1 }]
const configsFor4 : Combination[] = [{ S: 4 }, { S: 2, D: 1 }, { D: 2 }, { F: 1, S: 1 }, { Q: 1 }]

export function generateAllCombs(n: number) : Combination[] {
    switch (n) {
        case 0: return []
        case 1: return configsFor1
        case 2: return configsFor2
        case 3: return configsFor3
        case 4: return configsFor4
    }

    const s1 = createMap(configsFor1)
    const s2 = createMap(configsFor2)
    const s3 = createMap(configsFor3)
    const s4 = createMap(configsFor4)
    let curr = createMap([])
    const lastFour : Map<string, Combination>[] = [s1, s2, s3, s4];
    
    for ( let i : number = 5; i <= n; i++) {
        curr = createMap([])

        if ( lastFour[0] ) {
            for (const [_, value] of lastFour[0]) {


                const c4 = {...value}
                c4.Q = c4.Q ? c4.Q + 1 : 1
                addToMapIfAbsent(curr, c4)
            }
        }

        if ( lastFour[1] ) {
            for (const [_, value] of lastFour[1]) {

                const c2 = {...value}
                c2.F = c2.F ? c2.F + 1 : 1
                addToMapIfAbsent(curr, c2)
            }
        }

        if ( lastFour[2] ) {
            for (const [_, value] of lastFour[2]) {

                const c2 = {...value}
                c2.D = c2.D ? c2.D + 1 : 1
                addToMapIfAbsent(curr, c2)
            }
        }
        
        if ( lastFour[3] ) {
            for (const [_, value] of lastFour[3]) {
                const c = {...value}
                c.S = c.S ? c.S + 1 : 1
                addToMapIfAbsent(curr, c)
            };
        }
        lastFour.shift()
        lastFour.push(curr)
    }
    return Array.from(lastFour[3].values())
}

function createMap(obj: Combination[]) : Map<string, Combination>{
    const myMap = new Map<string, Combination>();
    obj.forEach((value) =>  {
            const key = JSON.stringify(sortProperties(value))
            myMap.set(key, value)
        }
    )
    return myMap
}

function sortProperties(obj: any) {
    const sortedKeys = Object.keys(obj).sort();

    const sortedObj = sortedKeys.reduce((acc, key) => {
        acc[key] = obj[key];
        return acc
    }, {} as Record<string, any>);

    return sortedObj
}

function addToMapIfAbsent(curr: Map<string, Combination>, c : Combination) {
    const newKey = JSON.stringify(sortProperties(c))
    if(! curr.has(newKey) ) {
        curr.set(newKey, c)
    }
}