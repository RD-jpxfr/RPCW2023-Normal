import json

f = open('./emprego-cientifico.json', encoding="utf-8")

data = json.load(f)

id = 0
for e in data:
    e["_id"] = str(id)
    id += 1

with open("emprego-cientifico_2.json", "w", encoding="utf-8") as fp:
    json.dump(data, fp, ensure_ascii=False) 
