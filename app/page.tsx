"use client";
import { useState } from "react";
import { Parallax } from 'react-parallax';
import { Collapsible } from "radix-ui";
import { Button, Avatar, Flex, Text, IconButton, HoverCard, Heading, Section, Card } from '@radix-ui/themes';
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import styles from '@/styles/modules/homepage.module.scss';

type ExperienceItemProps = {
  company: string;
  department: string;
  role: string;
  period: string;
  details: React.ReactNode;
};

const ExperienceItem = ({ company, department, role, period, details }: ExperienceItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Flex justify="center">
      <Card className={styles.cardStyle}>
        <Collapsible.Root open={open} onOpenChange={setOpen}>
          <Flex justify="between" align="center">
            <Text weight="bold">
              {company}<br/>
              {department && (
                <>
                  {department} <br />
                </>
              )}
              {role} {period}
            </Text>
            <Collapsible.Trigger asChild>
              <Button variant="soft">{open ? "收合" : "展開"}</Button>
            </Collapsible.Trigger>
          </Flex>
          <Collapsible.Content>
            <div style={{ marginTop: "1rem" }}>
              <h4>工作內容：</h4>
              {details}
            </div>
          </Collapsible.Content>
        </Collapsible.Root>
      </Card>
    </Flex>

  );
}

export default function Home() {
  return (
    <>
      <Parallax
        className={styles.reactParallax}
        bgImage="/bg.jpg"
        bgImageStyle={{ objectFit: 'cover', height: '100%' }}
        strength={300}>
      </Parallax>
      <Flex className={styles.information} gap="5" direction="column" align="center" justify="center">
        <Avatar
          size="8"
          src="/me.jpg"
          radius="full"
          fallback="C"
        />
        <Text className={styles.name}>Yu Lun Chou</Text>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <IconButton className={styles.iconButton} color="orange" radius="full" variant="solid">
              <GitHubLogoIcon width="40" height="40" />
            </IconButton>
          </HoverCard.Trigger>
          <HoverCard.Content maxWidth="300px" size="2" side="top">
            <Text>Follow me on Github</Text>
          </HoverCard.Content>
        </HoverCard.Root>
      </Flex>
      <Section className={styles.aboutMeSection}>
        <div>
          <Heading className="title">關於我</Heading>
          <Text className="content">因為想學一技之長而跑去學電腦程式語言，學著學著發現原來程式語言能應用在許多方面，覺得相當有趣，目前正在程式語言方面持續學習。</Text>
        </div>
      </Section>
      <Section className={styles.jobExperienceSection}>
        <Heading className="title">工作經歷</Heading>
        <ExperienceItem
          company="賽普勒斯商飛力通股份有限公司"
          department="台灣分公司"
          role="軟體工程師"
          period="2 年半以上"
          details={
            <>
              <ul>
                <li>.NET開發與維護系統排程及相關服務</li>
                <li>軟體測試及維護</li>
                <li>串接外部系統API</li>
                <li>Git版本控管</li>
              </ul>
              <h4>專案經歷：</h4>
              <p>（可補充具體專案名稱與成果）</p>
            </>
          }
        />
        <ExperienceItem
          company="凡達科技有限公司"
          department=""
          role="軟體工程師"
          period="1 年半"
          details={
            <>
              <ul>
                <li>.NET WebForm 及 MVC 專案開發</li>
                <li>與客戶討論需求及 UI 設計</li>
                <li>現有專案優化、維護、debug</li>
                <li>資料庫規劃</li>
                <li>技術文件撰寫</li>
              </ul>
              <h4>專案經歷：</h4>
              <p>（可補充具體專案名稱與成果）</p>
            </>
          }
        />
        <ExperienceItem
          company="創時億網路科技有限公司"
          department="台北研發部"
          role="助理前端工程師"
          period="半年以上"
          details={
            <>
              <ul>
                <li>React-Native 小工具開發</li>
                <li>python 爬蟲</li>
                <li>python 機器人開發</li>
              </ul>
              <h4>專案經歷：</h4>
              <p>（可補充具體專案名稱與成果）</p>
            </>
          }
        />
      </Section>
      <Section className={styles.portfolioSection}>
        <div>
          <Heading className="title">作品集</Heading>
        </div>
      </Section>
    </>
  );
}
