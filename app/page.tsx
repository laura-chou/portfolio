"use client";
import { Parallax } from 'react-parallax';
import { Avatar, Flex, Text, IconButton } from '@radix-ui/themes';
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
      <div>
        <Flex className={styles.information} gap="5" direction="column" align="center" justify="center">
          <Avatar
            size="8"
            src="/me.jpg"
            radius="full"
            fallback="A"
          />
          <Text className={styles.name}>Yu Lun Chou</Text>
          <IconButton className={styles.iconButton} color="orange" radius="full" variant="solid">
            <GitHubLogoIcon width="40" height="40" />
          </IconButton>
        </Flex>
      </div>
    </>
  );
}
