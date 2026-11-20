import React from 'react'
import { skills } from '../../data/skills'
import * as Icons from "lucide-react";
import FadeIn from '../animations/FadeIn';

const Skills = () => {

const skillCategories = {
  'Frontend Development': [
    skills.find(s => s.name === 'HTML'),
    skills.find(s => s.name === 'CSS'),
    skills.find(s => s.name === 'JavaScript'),
    skills.find(s => s.name === 'React'),
    skills.find(s => s.name === 'Tailwind CSS'),
    skills.find(s => s.name === 'Next.js'),
  ].filter(Boolean),

  'Programming & Databases': [
    skills.find(s => s.name === 'Python'),
    skills.find(s => s.name === 'Kotlin'),
    skills.find(s => s.name === 'MongoDB'),
    skills.find(s => s.name === 'Databases'),
  ].filter(Boolean),

  'Virtual Assistant': [
    skills.find(s => s.name === 'Customer Support'),
    skills.find(s => s.name === 'Excel & MS Office'),
    skills.find(s => s.name === 'Google Sheets'),
    skills.find(s => s.name === 'Canva'),
    skills.find(s => s.name === 'AI Tools'),
  ].filter(Boolean),

  'Design & Media': [
    skills.find(s => s.name === 'UI/UX Design'),
    skills.find(s => s.name === 'Graphic Design'),
    skills.find(s => s.name === 'Video Editing'),
  ].filter(Boolean),

  'IT & Tools': [
    skills.find(s => s.name === 'Git & GitHub'),
    skills.find(s => s.name === 'Linux'),
    skills.find(s => s.name === 'Networking (CCNA)'),
    skills.find(s => s.name === 'Cybersecurity Basics'),
    skills.find(s => s.name === 'Computer Troubleshooting'),
  ].filter(Boolean),
};

//get proficiency percentage
const getProficiencyLevel = (level) => {
    const levels = {
        'Expert' : 95,
        'Advanced' : 80,
        'Intermediate' : 65,
        'Beginner': 40
    };
    return levels[level] || 50;
};


//Get level color
const getLevelColor = (level) => {
  const colors = {
    'Expert': 'text-amber-300 bg-amber-300/20 border-amber-300/30',
    'Advanced': 'text-amber-400 bg-amber-400/20 border-amber-400/30',
    'Intermediate': 'text-amber-500 bg-amber-500/20 border-amber-500/30',
    'Beginner': 'text-amber-600 bg-amber-600/20 border-amber-600/30',
  };
  return colors[level] || 'text-gray-400 bg-gray-500/20 border-gray-500/30';
};

return <section id="skills" className='relative py-20 bg-black overflow-hidden'>
  {/* Animated Background Gradients */}
  <div className='absolute inset-0 overflow-hidden'>
    <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50'/>
    <div className='absolute bg-primary/10 w-96 h-96 bottom-1/4 right-0 rounded-full blur-3xl opacity-50'/>
  </div>

  <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

    <FadeIn delayed={100}>
      <div className='text-center mb-16'>
        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6'>
          <Icons.Sparkles className='w-4 h-4 text-primary'/>
          <span className='text-sm text-primary font-medium'>My Expertise</span>
        </div>
        <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
          Skills & Technologies
        </h2>
        <p className='text-lg text-white/60 max-w-2xl mx-auto'>
          A comprehensive overview of technical skills and proficiency levels
        </p>
      </div>
    </FadeIn>

    {/* Skills Categories */}
    <div className='grid grid-col-1 lg:grid-cols-3 gap-8'>
      {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
        <FadeIn key={category} delay={categoryIndex * 100}>
            <div className='relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group'>

              <div className='flex items-center gap-3 mb-6 pb-4 border-b border-white/10'>
                <div className='w-1 h-8 bg-linear-to-b from-primary/30 to-primary/10 rounded-full '></div>
                <h3 className='text-xl font-medium text-white'>{category}</h3>
              </div>

              {/* Skills List */}
              <div className='space-y-4'>
                {categorySkills.map((skill) => {
                  const IconComponent = Icons[skill.icon] || Icons.Code2;
                  const proficiency = getProficiencyLevel(skill.level);

                  return (
                    <div key={skill.id} className='space-y-2'>
                      <div className='flex items-center justify-between'>

                        {/* LEFT: icon + name */}
                        <div className='flex items-center gap-3'>
                          <div className='p-2 bg-white/5 rounded-lg'>
                            <IconComponent className='w-4 h-4 text-primary' />
                          </div>
                          <div>
                            <div className='text-sm font-medium text-white'>{skill.name}</div>
                            <div className='text-xs text-white/50'>{skill.experience}</div>
                          </div>
                        </div>

                        {/* RIGHT: badge */}
                        <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>

                      </div>

                      {/* Bar: track + fill */}
                      <div className='h-1.5 bg-white/5 rounded-full overflow-hidden'>
                        <div
                          className='relative top-0 left-0 h-full bg-linear-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 ease-out'
                          style={{ width: `${proficiency}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Hover Glow Effect */}
              <div className='absolute inset-0 bg-linear-to-br to-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none'></div>
            </div>

        </FadeIn>
      ))}
    </div>

  </div>
</section>
}

export default Skills