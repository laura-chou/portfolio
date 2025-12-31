"use client";
import { Parallax } from 'react-parallax';
import { Avatar, Flex, Text, IconButton, HoverCard, Heading } from '@radix-ui/themes';
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import styles from '@/styles/modules/homepage.module.scss';

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
      <section className={styles.aboutMeSection}>
        <div>
          <Heading className="title">About me</Heading>
          <Text className="content">因為想學一技之長而跑去學電腦程式語言，學著學著發現原來程式語言能應用在許多方面，覺得相當有趣，目前正在程式語言方面持續學習。</Text>
        </div>
      </section>

    </>
  );
}
