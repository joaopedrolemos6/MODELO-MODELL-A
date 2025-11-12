import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-light mb-8 text-center">Sobre a Modellá</h1>

        <div className="glass-card p-8 space-y-6">
          <p className="text-lg leading-relaxed">
            A Modellá nasceu com a missão de proporcionar às mulheres lingerie que une 
            sofisticação, conforto e qualidade excepcional. Acreditamos que cada mulher 
            merece se sentir confiante e bela, todos os dias.
          </p>

          <div>
            <h2 className="text-2xl font-light mb-4">Nossa História</h2>
            <p className="text-muted-foreground leading-relaxed">
              Fundada em 2020, a Modellá surgiu do desejo de criar peças que respeitam 
              o corpo feminino em todas as suas formas. Cada produto é cuidadosamente 
              desenvolvido com tecidos premium e modelagem anatômica, garantindo conforto 
              durante todo o dia.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-4">Nossos Valores</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong className="text-foreground">Qualidade:</strong> Selecionamos apenas os melhores materiais</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong className="text-foreground">Conforto:</strong> Modelagem anatômica e tecnologia de ajuste</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong className="text-foreground">Sustentabilidade:</strong> Produção consciente e responsável</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong className="text-foreground">Inclusão:</strong> Tamanhos e modelos para todos os corpos</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-center text-muted-foreground italic">
              "Cada mulher merece se sentir extraordinária, todos os dias"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
