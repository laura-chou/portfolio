'use client';

import { Container, Section, Heading, Card, Button, Flex, Text, Box } from '@radix-ui/themes';
import { HomeIcon } from "@radix-ui/react-icons";
import { useRouter } from 'next/navigation';

export default function CreationProjects() {
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
          <Heading size="6" mb="1" color="orange">創時億網路科技有限公司 (台北研發部)</Heading>
          <Text size="2" color="gray" mb="3" as="div">助理前端工程師</Text>
          <Flex direction="column" gap="4">
            <Card variant="surface">
              <Heading size="4" mb="2">客服小工具</Heading>
              <Text as="p" size="2" color="gray" mb="3">使用 React-Native 框架</Text>
              <Box pl="4">
                <Text as="div" size="2">• 依客服人員需求設計訂單的 UI</Text>
                <Text as="div" size="2">• 透過 API 串接進行訂單資料的新增、修改、查詢</Text>
                <Text as="div" size="2">• 輸入多個地址後可以在 google 地圖上觀看路徑規劃，顯示多個地點的座標、需要花費的的行車時間及里程</Text>
              </Box>
            </Card>

            <Card variant="surface">
              <Heading size="4" mb="2">帳號註冊機器人</Heading>
              <Text as="p" size="2" color="gray" mb="3">使用 Python 開發</Text>
              <Box pl="4">
                <Text as="div" size="2">• 透過模擬器去註冊 facebook 及 google 帳號</Text>
                <Text as="div" size="2">• Selenium WebDriver 爬蟲</Text>
                <Text as="div" size="2">• Appium 控制模擬器</Text>
                <Text as="div" size="2">• OpenCV 截圖比對</Text>
              </Box>
            </Card>

            <Card variant="surface">
              <Heading size="4" mb="2">自動下注程式手機板</Heading>
              <Text as="p" size="2" color="gray" mb="3">使用 Python Flask 框架</Text>
              <Box pl="4">
                <Text as="div" size="2">• 參考自動下注網頁版研發自動下注手機板</Text>
                <Text as="div" size="2">• API 串接</Text>
              </Box>
            </Card>
          </Flex>
        </Box>
      </Section>
    </Container>
  );
}
