const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-foreground/90 leading-relaxed">
          <p>
            My passion lies with <span className="text-accent font-semibold">interpretable, fair and transparent AI solutions</span> for societal impact. 
            I believe in sustainable AI development—methods that use less energy and resources, especially relevant in times of climate change.
          </p>
          
          <p>
            I stand for <span className="text-secondary font-semibold">open-source, efficient AI for healthcare</span>, because it can't be that only well-funded hospitals 
            or privileged individuals have their data represented in training data and have access to AI-enhanced healthcare.
          </p>
          
          <p>
            I believe we should learn to <span className="text-accent font-semibold">work together with AI</span>—not against it or surrendering to it. 
            I'm committed to empowering women in CS and building AI that respects all genders, ethnicities, and minority groups.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
