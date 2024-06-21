import pandas as pd

def splitdataframe(data_str):
    # 将字符串按行分割
    lines = data_str.strip().split('\n')

    # 初始化空列表，用于存储每个公司的数据
    data = []

    # 每三行为一组，分别存储为 (链接, 公司名称, 总部位置) 的元组
    for i in range(0, len(lines), 3):
        wikidata_link = lines[i].strip()
        company_name = lines[i+1].strip()
        headquarters = lines[i+2].strip()
        data.append((wikidata_link, company_name, headquarters))

    # 创建DataFrame
    df = pd.DataFrame(data, columns=['Wikidata Link', 'Company Name', 'Headquarters'])

    # 打印DataFrame
    print(df)


data_str_1990 = """
Q30289967
IBM
Milan
Q266423
Bristol-Myers Squibb
New York City
Q30269113
Merck
Madrid
Q483551
Walmart
Bentonville
Q54173
General Electric
Boston
Q212405
Procter & Gamble
Ohio
Q212405
Procter & Gamble
Cincinnati
Q919641
Verizon
Basking Ridge
Q102543513
Johnson & Johnson
Bratislava
Q43896148
Eli Lilly
Sesto Fiorentino
Q159433
3M
Maplewood
Q334800
PepsiCo
Purchase
Q35476
AT&T
Dallas
Q66
Boeing
Chicago
Q221062
DuPont
Wilmington
"""

data_str_1999 = """
Q2283
Microsoft
Redmond
Q54173
General Electric
Boston
Q483551
Walmart
Bentonville
Q30289967
IBM
Milan
Q30269113
Merck
Madrid
Q206921
Pfizer
New York City
Q266423
Bristol-Myers Squibb
New York City
Q212405
Procter & Gamble
Ohio
Q212405
Procter & Gamble
Cincinnati
Q219508
Citigroup
388 Greenwich Street
Q102543513
Johnson & Johnson
Bratislava
Q487907
Bank of America
Charlotte
Q487907
Bank of America
Bank of America Financial Center
Q43896148
Eli Lilly
Sesto Fiorentino
Q35476
AT&T
Dallas
"""
#splitdataframe(data_str_1990)
splitdataframe(data_str_1999)