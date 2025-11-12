import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Como funciona o Clique & Retire?",
    answer: "Compre online e escolha a opção 'Retirar na Loja' no checkout. Você receberá um e-mail quando o pedido estiver pronto para retirada (geralmente em 2 horas úteis). Basta apresentar o código do pedido e um documento com foto na loja escolhida."
  },
  {
    question: "Qual é a política de trocas?",
    answer: "Aceitamos trocas em até 30 dias após a compra. O produto deve estar sem uso, com etiquetas e na embalagem original. A primeira troca é gratuita, podendo ser feita em loja ou pelos Correios."
  },
  {
    question: "Como escolher o tamanho certo?",
    answer: "Disponibilizamos um Guia de Medidas completo em cada página de produto. Recomendamos medir o contorno do busto e torso para encontrar o tamanho ideal. Em caso de dúvida, nossa equipe está disponível via chat."
  },
  {
    question: "Quanto tempo leva para chegar?",
    answer: "O prazo de entrega varia conforme sua região: Sul e Sudeste (3-5 dias úteis), Centro-Oeste e Nordeste (5-7 dias úteis), Norte (7-10 dias úteis). Você pode acompanhar seu pedido pelo código de rastreamento."
  },
  {
    question: "Os produtos têm garantia?",
    answer: "Todos os nossos produtos têm garantia de 90 dias contra defeitos de fabricação. Se identificar qualquer problema, entre em contato conosco que resolveremos rapidamente."
  },
  {
    question: "Posso parcelar a compra?",
    answer: "Sim! Aceitamos cartões de crédito com parcelamento em até 6x sem juros para compras acima de R$ 100. Também oferecemos PIX com 5% de desconto."
  }
];

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-light mb-4 text-center">Perguntas Frequentes</h1>
        <p className="text-muted-foreground text-center mb-12">
          Encontre respostas para as dúvidas mais comuns
        </p>

        <div className="glass-card p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="glass-card p-6 mt-6 text-center">
          <h2 className="text-xl font-medium mb-2">Não encontrou sua resposta?</h2>
          <p className="text-muted-foreground mb-4">
            Nossa equipe está pronta para ajudar
          </p>
          <a 
            href="mailto:contato@modella.com.br" 
            className="text-primary hover:underline font-medium"
          >
            contato@modella.com.br
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;
