import json
import numpy as np
from queryCompaniesQID import request_query_companies_qid
from queryHeadquarters import queryHeadquarters

with open('companies_by_year.json', 'r') as file:
    data = json.load(file)

years = np.arange(1990, 2025)
string_years = [str(year) for year in years]

unique_companies = []

for i in string_years:
    for company in data[i]:
        if company not in unique_companies:
            unique_companies.append(company)

#print(unique_companies)
#print(len(unique_companies))

#['Exxon Mobil', 'IBM', 'Loews', 'Raytheon', 'Bristol-Myers Squibb', 'Merck', 'Coca-Cola', 'Walmart', 'General Electric', 'Procter & Gamble', 'Verizon', 'Johnson & Johnson', 'Eli Lilly', '3M', 'PepsiCo', 'Walt Disney', 'AT&T', 'AIG', 'Boeing', 'DuPont', 'Pfizer', 'Microsoft', 'Altria Group', 'Home Depot', 'Intel', 'Chevron', 'Bank of America', 'Cisco Systems', 'Berkshire Hathaway', 'Citigroup', 'Oracle', 'Qualcomm', 'Paramount Global', 'Wells Fargo', 'JPMorgan Chase', 'UPS', 'Alphabet', 'Amgen', 'Apple', 'Philip Morris Int.', 'Amazon', 'Meta/Facebook', 'Visa', 'UnitedHealth', 'Mastercard', 'Tesla', 'NVIDIA', 'PayPal', 'Broadcom']

# for company in unique_companies:
#     company_qid = request_query_companies_qid(company)
results = []

counter = 0
for i in unique_companies:
    a = request_query_companies_qid(i)
    if a is None:
        counter = counter+1
        continue
    #print(a)
    name = a['itemLabel']['value']
    qid = a['item']['value'].split('/')[-1]
    result = {'Name': name, 'QID': qid}
    results.append(result)

print('total number no company qids:', counter)
print(results)

# data = {
#     'item': {'type': 'uri', 'value': 'http://www.wikidata.org/entity/Q555925'},
#     'itemLabel': {'xml:lang': 'en', 'type': 'literal', 'value': 'Broadcom'}
# }

# # 提取 Q555925
# qid = data['item']['value'].split('/')[-1]  # 使用 split('/') 获取最后一个元素
# print("QID:", qid)  # 输出: Q555925

# # 提取 Broadcom
# name = data['itemLabel']['value']
# print("Name:", name)  # 输出: Broadcom
qid_list = []
for result in results:
    qid_list.append(result['QID'])

print(qid_list)

# qids = ["Q555925", "Q478214"]

# for qid in qids:
#     queryHeadquarters(qid)