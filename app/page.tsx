'use client';

import Image from 'next/image';
import ResumeAnalyzerApp from './components/ResumeAnalyzerApp';
import styles from './styles/Home.module.css';
import { SparklesCore } from './components/ui/sparkles';

export default function Home() {
  return (
    <main className={styles.App}>
      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className={styles.sparkles}
          particleColor="#FFFFFF"
        />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.centeredContent}>
              <div className={styles.logoBox}>
                <Image src='/logo.png' alt='InterviewGPT logo' width='400' height='75' />
              </div>
              <ResumeAnalyzerApp />
            </div>
          </div>
          <p className={styles.footer}>
            Built by <a href='mailto:falconprogrammer@proton.me' target='_blank'>Falcon Industries, Tech</a>
          </p>
        </div>
      </div>
    </main>
  )
}
