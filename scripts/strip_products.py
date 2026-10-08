# 从 siteData.js 移除 products 大数组 (内嵌260条 + ...importedProducts spread)
# 保留: vps/quickCats/services/featuredIds/footerCols 等文案字段
import re, io

p = r"E:\运营\07-网站建设\俄-网站\yufan_demo\src\data\siteData.js"
s = io.open(p, encoding='utf-8').read()

# 1) 去掉顶部 import importedProducts
s2 = s.replace("import { importedProducts } from './importedProducts.js'\r\n", "")
s2 = s2.replace("import { importedProducts } from './importedProducts.js'\n", "")
assert s2 != s, "import 行未找到"

# 2) 找到 products: [ ... ...importedProducts ], 整块删除
#    起始: 行首 "  // 导出全量产品数据" 或直接 "products: ["
m_start = re.search(r"\n\s*// 导出全量产品数据[^\n]*\n\s*products:\s*\[", s2)
if not m_start:
    m_start = re.search(r"\n\s*products:\s*\[", s2)
assert m_start, "products 数组起点未找到"

# 终点: ... importedProducts 后的 "],"
m_end = re.search(r"\.\.\.\s*importedProducts\s*,?\n\s*\],", s2[m_start.start():])
assert m_end, "products 数组终点未找到"

start = m_start.start()          # 含起点前换行
end = m_start.start() + m_end.end()
removed = s2[start:end]
s3 = s2[:start] + "\n" + s2[end:]

io.open(p, 'w', encoding='utf-8', newline='').write(s3)
print("removed chars:", len(removed))
print("new length:", len(s3))
# 校验: 不再含 products 数组
assert "products: [" not in s3.replace("products: [\n", "") and "importedProducts" not in s3
print("OK: products array removed, importedProducts reference gone")
