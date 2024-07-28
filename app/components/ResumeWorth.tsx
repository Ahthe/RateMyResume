import React from 'react';
import styles from '../styles/ResumeWorth.module.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ResumeWorthProps {
  resumePercentage: string;
}

const ResumePercentage: React.FC<ResumeWorthProps> = ({ resumePercentage }) => {
  const parseResponse = (response: string) => {
    const percentageMatch = response.match(/<Estimated Value>(\d+)%<\/Estimated Value>/);
    const percentage = percentageMatch ? percentageMatch[1] : 'N/A';

    const explanationMatch = response.match(/<Explanation>([\s\S]*?)<\/Explanation>/);
    const explanation = explanationMatch ? explanationMatch[1] : '';

    const improvementsMatch = response.match(/<Improvements>([\s\S]*?)<\/Improvements>/);
    const improvements = improvementsMatch ? improvementsMatch[1] : '';

    return { percentage, explanation, improvements };
  };

  const { percentage, explanation, improvements } = parseResponse(resumePercentage);

  const explanationItems = explanation.match(/<li>(.+?)<\/li>/g) || [];
  const improvementItems = improvements.match(/<li>(.+?)<\/li>/g) || [];

  return (
    <div className={styles.container}>
      <div className={styles.worth}>{percentage}%</div>
      <p className={styles.subtitle}>Resume Percentage</p>
      
      <div className={styles.content}>
        <div className={styles.column}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Key Factors</CardTitle>
              <CardDescription>What contributes to your worth</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className={styles.list}>
                {explanationItems.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    {item.replace(/<\/?li>/g, '')}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className={styles.column}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Improvements</CardTitle>
              <CardDescription>How to rate more</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className={styles.list}>
                {improvementItems.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    {item.replace(/<\/?li>/g, '')}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResumePercentage;