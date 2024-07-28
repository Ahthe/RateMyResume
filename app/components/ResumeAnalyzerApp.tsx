"use client";
import React, { useEffect, useState } from 'react';
import ResumeUploader from './ResumeUploader';
import ResumeWorth from './ResumeWorth';
import styles from '../styles/ResumeAnalyzerApp.module.css';
import { useCompletion } from 'ai/react';
import { SparklesCore } from './ui/sparkles';
import { Typewriter } from 'react-simple-typewriter';

const ResumeAnalyzerApp = () => {
  const [showWorth, setShowWorth] = useState(false);
  const [isLoadingResume, setIsLoadingResume] = useState(false);
  const [resumeText, setResumeText] = useState<string>('');
  const { completion, isLoading, complete, error } = useCompletion({
    api: '/api/resume',
  });

  useEffect(() => {
    const getResumeWorth = async (text: string) => {
      const messageToSend = `RESUME: ${text}\n\n-------\n\n`;
      await complete(messageToSend);
      setShowWorth(true);
      setIsLoadingResume(false);
    };

    if (resumeText !== '') {
      getResumeWorth(resumeText).then();
    }
  }, [resumeText]);

  return (
    <div className={styles.analyzerWrapper}>
          {!showWorth ? (
          <div className={styles.uploaderWrapper}>
            <p className={styles.instructionsText}>
              <Typewriter
                words={['Upload your resume to Improve it.' , 'Get your 6 figure salary today.']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <ResumeUploader setIsLoading={setIsLoadingResume} setResumeText={setResumeText} />
              {(isLoadingResume || isLoading) && 
                <div className={styles.loadingContainer}>
                  <div className={styles.loadingSpinner}></div>
                </div>}
            </div>
          ) : (
            <ResumeWorth resumeWorth={completion} />
          )}
          {error && <p className={styles.errorMessage}>{error.message}</p>}
         
        </div>
      );
  
    
};
export default ResumeAnalyzerApp;
