# Modellá - E-commerce de Lingerie Premium

E-commerce sofisticado de lingerie feminina com design inspirado na Apple, utilizando glassmorphism e microinterações suaves.

## 🎨 Design

- **Estilo**: Minimalista, clean e fluido inspirado nos padrões Apple
- **Paleta**: Rosa suave (#EFC5CE), tons neutros e glassmorphism
- **Tipografia**: Inter (semelhante à San Francisco)
- **Animações**: Framer Motion com transições suaves
- **Efeitos**: Glassmorphism (backdrop-blur) e sombras translúcidas

## 🛠️ Stack Tecnológica

- **Framework**: React 18 + Vite
- **Linguagem**: TypeScript
- **Estilo**: TailwindCSS + Framer Motion
- **UI Components**: shadcn/ui + Radix UI
- **Roteamento**: React Router v6
- **Ícones**: Lucide React
- **Estado**: React Hooks + LocalStorage (carrinho)

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/           # Header, Footer
│   ├── products/         # ProductCard, ProductGrid
│   └── ui/              # Componentes shadcn/ui
├── hooks/
│   └── useCart.ts       # Gerenciamento do carrinho
├── lib/
│   └── api/             # Mock APIs (products, categories, stores)
├── pages/
│   ├── Home.tsx         # Página inicial com hero e destaques
│   ├── Products.tsx     # Listagem de produtos (PLP)
│   ├── ProductDetail.tsx # Detalhes do produto (PDP)
│   ├── Cart.tsx         # Carrinho de compras
│   ├── Checkout.tsx     # Finalização do pedido
│   ├── Stores.tsx       # Clique & Retire
│   ├── About.tsx        # Sobre a marca
│   ├── FAQ.tsx          # Perguntas frequentes
│   └── Policy.tsx       # Política de trocas
├── types/
│   └── index.ts         # Interfaces TypeScript
└── index.css           # Design system (variáveis CSS)
```

## ✨ Funcionalidades Implementadas

### 🛍️ Core E-commerce
- [x] Catálogo de produtos com filtros e ordenação
- [x] Página de produto com galeria de imagens
- [x] Seleção de tamanho e cor
- [x] Carrinho de compras persistente (LocalStorage)
- [x] Checkout em etapas (dados, entrega, pagamento)
- [x] Página de lojas físicas (Clique & Retire)

### 🎨 Design & UX
- [x] Design system com glassmorphism
- [x] Animações suaves (Framer Motion)
- [x] Responsivo mobile-first
- [x] Navegação intuitiva com breadcrumbs
- [x] Feedback visual (toasts)
- [x] Cards com hover effects

### 📄 Páginas Institucionais
- [x] Sobre Nós
- [x] FAQ com accordion
- [x] Política de Trocas e Devoluções
- [x] Newsletter no footer

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🔌 Integração com Backend

O projeto está 100% preparado para integração com backend:

- **Mock APIs** em `/lib/api` podem ser facilmente substituídas por chamadas reais
- **Interfaces TypeScript** tipadas para todos os dados
- **Serviços desacoplados** prontos para REST ou GraphQL
- **.env.example** preparado para URLs da API

### Exemplo de Integração

```typescript
// Antes (Mock)
export const getProducts = async (): Promise<Product[]> => {
  return mockProducts;
};

// Depois (API Real)
export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};
```

## 📱 SEO & Acessibilidade

- Meta tags otimizadas em todas as páginas
- Semantic HTML (header, main, footer, article, section)
- Imagens com atributos alt descritivos
- Navegação por teclado funcional
- Contraste WCAG AA
- Fonte legível e responsiva

## 🎯 Próximos Passos (Backend)

1. Conectar APIs reais de produtos
2. Implementar autenticação de usuário
3. Integrar gateway de pagamento (Stripe/PagSeguro)
4. Adicionar cálculo de frete real
5. Sistema de avaliações e reviews
6. Painel administrativo
7. Integração com estoque
8. E-mail transacional

## 📄 Licença

Projeto desenvolvido para fins educacionais.

---

Desenvolvido com ❤️ usando React + TailwindCSS + Framer Motion
