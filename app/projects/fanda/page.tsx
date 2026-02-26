'use client';

import { Container, Section, Heading, Table, Link, Button, Flex, Text, Box, Separator } from '@radix-ui/themes';
import { HomeIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { useRouter } from 'next/navigation';

export default function VandaProjects() {
  const router = useRouter();

  return (
    <Container size="3">
      <Section size="2">
        <Flex justify="between" align="center" mb="5">
          <Heading size="8">專案經歷</Heading>
          <Button variant="soft" color="orange" onClick={() => router.push('/')}>
            <HomeIcon /> 回首頁
          </Button>
        </Flex>

        <Box mb="8">
          <Heading size="6" mb="1" color="orange">凡達科技有限公司</Heading>
          <Text size="2" color="gray" mb="3" as="div">軟體工程師</Text>

          <Box mb="6">
            <Heading size="4" mb="2">使用 .NET Core 3.1</Heading>
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>專案名稱</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>專案描述</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>工作移交</Table.RowHeaderCell>
                  <Table.Cell>
                    • 離職員工交接項目審核流程系統<br/>
                    • 負責整個專案開發<br/>
                    • UI 設計、調整
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>誠信經營</Table.RowHeaderCell>
                  <Table.Cell>
                    • 資策會內部使用的誠信經營網站，包含後台管理<br/>
                    • 負責專案合作開發及維護<br/>
                    • UI 設計、調整
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>

          <Box mb="6">
            <Heading size="4" mb="2">使用 .NET MVC 5 及 Web API</Heading>
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>專案名稱</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>專案描述</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>ProductAPI</Table.RowHeaderCell>
                  <Table.Cell>
                    • 透過傳入參數可以將資料新增至蝦皮及 Momo 的商品列表的 API<br/>
                    • 負責整個專案開發及維護
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>

          <Box mb="6">
            <Heading size="4" mb="2">使用 .NET Framework 4 以上 (Web Forms)</Heading>
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>專案名稱</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>專案描述</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>全會 OA 服務</Table.RowHeaderCell>
                  <Table.Cell>• 資策會內部使用的事件單開立系統，例如：服務單申請流程、滿意度問卷、服務單查詢、人員權限<br/>• 負責整個專案開發及維護<br/>• UI 設計、調整</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>資安管理平台</Table.RowHeaderCell>
                  <Table.Cell>• 資策會資訊處使用的系統，例如：資產盤點、資安事件通報應變管理、資訊機房對外調查<br/>• 負責專案維護及優化<br/>• UI 設計、調整</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>ICBS Memo</Table.RowHeaderCell>
                  <Table.Cell>• 資策會所有部門公告發布系統<br/>• 負責專案維護及改版合作</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>台綜院</Table.RowHeaderCell>
                  <Table.Cell>• 台灣綜合研究院內部使用的系統，例如：新續聘人員申請、計畫採購/借支單申請及簽核流程<br/>• 負責專案合作開發及維護</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>客訴</Table.RowHeaderCell>
                  <Table.Cell>• 資策會內部使用的客戶投訴系統，例如：客訴單申請流程、案件統計<br/>• 負責整個專案開發及維護<br/>• UI 設計、調整</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    <Link href="https://www.geipc.tw/" target="_blank">
                      綠能科技產業推動中心 <ExternalLinkIcon />
                    </Link>
                  </Table.RowHeaderCell>
                  <Table.Cell>• 綠能科技產業推動中心官網及後台管理<br/>• 負責專案改版及維護<br/>• UI 調整</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    <Link href="https://cdxoclub.iii.org.tw/" target="_blank">
                      CDXO CLUB - 資策會 <ExternalLinkIcon />
                    </Link>
                  </Table.RowHeaderCell>
                  <Table.Cell>• CDXO CLUB 資策會官網及後台管理<br/>• 負責專案合作開發及維護<br/>• UI 調整</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>iSpace 辦公空間資訊平台</Table.RowHeaderCell>
                  <Table.Cell>• 記錄各棟大樓相關資訊及空氣品質的系統，例如：溫度/濕度/CO2日週月趨勢圖、空品超標通知信、空品資訊 api 串接<br/>• 負責專案開發及維護</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>二代公文</Table.RowHeaderCell>
                  <Table.Cell>• 資策會文書組使用的系統，主要可以查詢收文、發文、簽呈、契約等公文及附件<br/>• 負責專案維護</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>計畫函文查詢</Table.RowHeaderCell>
                  <Table.Cell>• 資策會產技中心使用的系統，主要可以查詢收文、發文等公文及附件<br/>• 負責專案開發及維護</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>檔案管理系統</Table.RowHeaderCell>
                  <Table.Cell>• 資策會文書組使用的系統，主要可以對公文資料進行修改<br/>• 負責專案維護及優化</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>會計溝通平台</Table.RowHeaderCell>
                  <Table.Cell>• 資策會會計處使用的系統，例如：業務管理人員詢問/確認、報表編制/覆核、歷史紀錄查詢、階層權限設定<br/>• 負責整個專案開發<br/>• UI 設計、調整</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>資產負債催結</Table.RowHeaderCell>
                  <Table.Cell>• 資策會會計處使用的系統<br/>• 負責專案維護</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>iMOOC</Table.RowHeaderCell>
                  <Table.Cell>• 資策會人資處的課程學習系統，例如：課程設定、線上測驗、同仁學習歷程查詢<br/>• 負責專案維護及優化<br/>• UI 設計、調整</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    <Link href="https://www.itis.org.tw/default.aspx" target="_blank">
                      智網系統 <ExternalLinkIcon />
                    </Link>
                  </Table.RowHeaderCell>
                  <Table.Cell>• 經濟部技術處產業技術基磐研究與知識服務計畫網站<br/>• 負責專案合作開發</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Box>
        </Box>
      </Section>
    </Container>
  );
}
