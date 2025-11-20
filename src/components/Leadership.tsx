import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Users } from "lucide-react";

const awards = [
  "Hackathon Winner – Lynx Stockholm Quant Trading Challenge",
  "Verbal Commendation at Harvard WorldMUN 2024 in Taipei"
];

const scholarships = [
  "Studienstiftung des Deutschen Volkes (German Scholarship Foundation)",
  "Fulbright Scholarship - Leaders in Entrepreneurship Program",
  "Be.Boosted Fellow 2024"
];

const beyondResearch = [
  { icon: "🏃", title: "Running & Fitness", description: "Staying active and pushing limits" },
  { icon: "⛵", title: "Sailing & Surfing", description: "Embracing the power of water" },
  { icon: "⛷️", title: "Skiing", description: "Conquering mountains with grace" },
  { icon: "💻", title: "Hackathons", description: "Building innovative solutions" }
];

const volunteering = [
  "Social Media for Women of Tech Conference - Building a community",
  "Girl's Day coordinator at TU Munich - Inspiring young minds",
  "MIT Sailing Instructor - Sharing passion for sports",
  "Student Council Member - Representing student interests"
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent">
          Leadership & Beyond
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-accent" />
              <h3 className="text-3xl font-bold text-accent">Awards & Scholarships</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-accent mb-4">Awards</h4>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <Card key={index} className="border-border bg-card hover:border-accent transition-colors">
                      <CardContent className="p-4">
                        <p className="text-foreground/90">{award}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent mb-4">Scholarships</h4>
                <div className="space-y-4">
                  {scholarships.map((scholarship, index) => (
                    <Card key={index} className="border-border bg-card hover:border-accent transition-colors">
                      <CardContent className="p-4">
                        <p className="text-foreground/90">{scholarship}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-secondary" />
              <h3 className="text-3xl font-bold text-secondary">Beyond Research</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {beyondResearch.map((item, index) => (
                <Card key={index} className="border-border bg-card text-center hover:border-secondary transition-colors">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h4 className="text-lg font-bold text-secondary mb-2">{item.title}</h4>
                    <p className="text-foreground/80 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-accent" />
              <h3 className="text-3xl font-bold text-accent">Volunteering</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {volunteering.map((activity, index) => (
                <Card key={index} className="border-border bg-card hover:border-accent transition-colors">
                  <CardContent className="p-6">
                    <p className="text-foreground/90 text-center">{activity}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
