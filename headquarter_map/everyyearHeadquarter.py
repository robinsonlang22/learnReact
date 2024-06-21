import json
import queryTest as qt

data = qt.load_data('companies_by_year.json')
companyayear = data["1999"]
results, counter = qt.fetch_company_qids(companyayear)
print('Total number of companies without QIDs:', counter)
print(results)

qid_list = [result['QID'] for result in results]
print(qid_list)

for qid in qid_list:
        qt.queryHeadquarters(qid)
