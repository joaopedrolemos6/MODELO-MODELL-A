import { motion } from 'framer-motion';

const Policy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-light mb-8 text-center">Trocas e Devoluções</h1>

        <div className="glass-card p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-light mb-4">Política de Trocas</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Na Modellá, você tem até 30 dias após o recebimento do produto para solicitar 
              uma troca, sem necessidade de justificativa.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Produto sem uso, com etiquetas originais</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Embalagem original preservada</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Primeira troca gratuita</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Pode ser feita em loja física ou pelos Correios</span>
              </li>
            </ul>
          </section>

          <section className="pt-6 border-t border-white/10">
            <h2 className="text-2xl font-light mb-4">Como Solicitar</h2>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-medium text-foreground">1.</span>
                <span>Entre em contato através do e-mail trocas@modella.com.br ou WhatsApp</span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-foreground">2.</span>
                <span>Informe o número do pedido e o motivo da troca</span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-foreground">3.</span>
                <span>Aguarde o código de postagem ou vá até uma de nossas lojas</span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-foreground">4.</span>
                <span>Após recebermos o produto, faremos a análise em até 3 dias úteis</span>
              </li>
            </ol>
          </section>

          <section className="pt-6 border-t border-white/10">
            <h2 className="text-2xl font-light mb-4">Devoluções e Reembolso</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Se preferir o reembolso ao invés da troca, o valor será estornado na mesma 
              forma de pagamento original em até 10 dias úteis após aprovação da devolução.
            </p>
          </section>

          <section className="pt-6 border-t border-white/10">
            <h2 className="text-2xl font-light mb-4">Produtos com Defeito</h2>
            <p className="text-muted-foreground leading-relaxed">
              Produtos com defeito de fabricação podem ser trocados ou devolvidos sem custos, 
              dentro do prazo de garantia de 90 dias. Entre em contato imediatamente para 
              agilizarmos o processo.
            </p>
          </section>

          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-muted-foreground">
              Dúvidas? Entre em contato: <br />
              <a href="mailto:trocas@modella.com.br" className="text-primary hover:underline">
                trocas@modella.com.br
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Policy;
