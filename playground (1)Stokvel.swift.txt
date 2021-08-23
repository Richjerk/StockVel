import Foundation

print("Hello New World")
import Algorithmia
let input = https://comsole.atra.io/app/5299cd39-1e88-4258-b4f5-e15a9d09a285";
let client = Algorithmia_client(simpleKey:"simyZpeABhVodSELL8TUW+tnD1d1")
let algo = client.algo(algoUri: "Namanje1/StockVel")
algo.pipe(text: input) { resp, in print(resp)