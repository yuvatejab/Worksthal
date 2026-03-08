import { generatePDF } from './utils/pdf-generator';
import { generateDOC } from './utils/doc-generator';
import { aimlResumeData, dataAnalystResumeData, sdeResumeData } from './data/resume-data';
import { entntResumeData } from './data/entnt-resume-data';

async function generateAllResumes() {
  console.log('Starting resume generation...\n');

  try {
    console.log('Generating ENTNT Full Stack Developer resume...');
    generatePDF(entntResumeData, 'resume-generator/output/yuva-teja-entnt-fullstack-resume.pdf');
    await generateDOC(entntResumeData, 'resume-generator/output/yuva-teja-entnt-fullstack-resume.docx');
    console.log('✓ ENTNT Full Stack Developer resume generated\n');

    console.log('Generating AI/ML Engineer resumes...');
    generatePDF(aimlResumeData, 'resume-generator/output/yuva-teja-aiml-resume.pdf');
    await generateDOC(aimlResumeData, 'resume-generator/output/yuva-teja-aiml-resume.docx');
    console.log('✓ AI/ML Engineer resumes generated\n');

    console.log('Generating Data Analyst resumes...');
    generatePDF(dataAnalystResumeData, 'resume-generator/output/yuva-teja-data-analyst-resume.pdf');
    await generateDOC(dataAnalystResumeData, 'resume-generator/output/yuva-teja-data-analyst-resume.docx');
    console.log('✓ Data Analyst resumes generated\n');

    console.log('Generating Software Developer resumes...');
    generatePDF(sdeResumeData, 'resume-generator/output/yuva-teja-sde-resume.pdf');
    await generateDOC(sdeResumeData, 'resume-generator/output/yuva-teja-sde-resume.docx');
    console.log('✓ Software Developer resumes generated\n');

    console.log('All resumes generated successfully!');
    console.log('\nGenerated files:');
    console.log('1. resume-generator/output/yuva-teja-entnt-fullstack-resume.pdf');
    console.log('2. resume-generator/output/yuva-teja-entnt-fullstack-resume.docx');
    console.log('3. resume-generator/output/yuva-teja-aiml-resume.pdf');
    console.log('4. resume-generator/output/yuva-teja-aiml-resume.docx');
    console.log('5. resume-generator/output/yuva-teja-data-analyst-resume.pdf');
    console.log('6. resume-generator/output/yuva-teja-data-analyst-resume.docx');
    console.log('7. resume-generator/output/yuva-teja-sde-resume.pdf');
    console.log('8. resume-generator/output/yuva-teja-sde-resume.docx');
  } catch (error) {
    console.error('Error generating resumes:', error);
    process.exit(1);
  }
}

generateAllResumes();
