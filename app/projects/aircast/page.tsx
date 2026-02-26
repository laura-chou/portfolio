'use client';

import { Container, Section, Heading, Card, Button, Flex, Text, Box, Separator } from '@radix-ui/themes';
import { HomeIcon } from "@radix-ui/react-icons";
import { useRouter } from 'next/navigation';

export default function FlytechProjects() {
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
          <Heading size="6" mb="1" color="orange">賽普勒斯商飛力通股份有限公司 (台灣分公司)</Heading>
          <Text size="2" color="gray" mb="3" as="div">軟體工程師</Text>
          <Card variant="surface">
            <Box pl="4" py="2">
              <Text as="div" size="3" mb="2">• .NET開發與維護系統排程及相關服務</Text>
              <Text as="div" size="3" mb="2">• 軟體測試及維護</Text>
              <Text as="div" size="3" mb="2">• 串接外部系統API</Text>
              <Text as="div" size="3" mb="2">• Git版本控管</Text>
            </Box>
          </Card>
        </Box>
      </Section>
    </Container>
  );
}
