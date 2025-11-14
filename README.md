# UNNA - E-commerce de Moda e Saúde

E-commerce sofisticado de lingerie e moda íntima feminina com design inspirado na Apple, utilizando glassmorphism e microinterações suaves.

## 🎨 Design System

### Identidade Visual
- **Marca**: UNNA - Moda e Saúde
- **Estilo**: Minimalista, clean e fluido inspirado nos padrões Apple
- **Paleta de Cores**:
  - Background: `hsl(90, 18%, 95%)` - Verde suave claro
  - Foreground: `hsl(100, 20%, 3%)` - Preto esverdeado
  - Primary: `hsl(90, 18%, 73%)` - Verde médio
  - Secondary: `hsl(210, 13%, 60%)` - Cinza azulado
  - Muted: `hsl(260, 6%, 48%)` - Roxo acinzentado
  - Accent: Verde suave (primary)
- **Tipografia**: Inter (fallback para San Francisco)
- **Animações**: Framer Motion com transições suaves e fade-in
- **Efeitos**: Glassmorphism (backdrop-blur) e sombras translúcidas

### Design Tokens
Todos os tokens de design são definidos em `src/index.css` usando variáveis CSS em formato HSL, garantindo consistência e facilidade de manutenção. O sistema suporta tema claro e escuro automaticamente.

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
├── assets/              # Imagens estáticas (logo, etc)
│   └── logo-unna.jpeg
├── components/
│   ├── layout/          # Componentes de layout
│   │   ├── Header.tsx   # Cabeçalho com navegação e busca
│   │   └── Footer.tsx   # Rodapé com links e newsletter
│   ├── products/        # Componentes de produtos
│   │   ├── ProductCard.tsx  # Card individual do produto
│   │   └── ProductGrid.tsx  # Grid de produtos com loading
│   ├── ui/              # Componentes shadcn/ui (40+ componentes)
│   └── NavLink.tsx      # Link de navegação com estado ativo
├── hooks/
│   ├── useCart.ts       # Hook de gerenciamento do carrinho
│   ├── use-toast.ts     # Hook de notificações toast
│   └── use-mobile.tsx   # Hook para detectar dispositivos móveis
├── lib/
│   ├── api/             # Mock APIs (pronto para backend)
│   │   ├── products.ts  # API de produtos
│   │   ├── categories.ts # API de categorias
│   │   └── stores.ts    # API de lojas físicas
│   └── utils.ts         # Utilitários (cn para classes)
├── pages/
│   ├── Home.tsx         # Página inicial com hero e destaques
│   ├── Products.tsx     # Listagem geral de produtos (PLP)
│   ├── ProductDetail.tsx # Detalhes do produto (PDP)
│   ├── Cart.tsx         # Carrinho de compras
│   ├── Checkout.tsx     # Finalização do pedido
│   ├── Stores.tsx       # Clique & Retire (lojas físicas)
│   ├── About.tsx        # Sobre a marca
│   ├── FAQ.tsx          # Perguntas frequentes
│   ├── Policy.tsx       # Política de trocas e devoluções
│   ├── Admin.tsx        # Painel administrativo (visual)
│   ├── NotFound.tsx     # Página 404
│   └── categories/      # Páginas de categorias específicas
│       ├── Sutias.tsx
│       ├── Calcinhas.tsx
│       ├── Modeladores.tsx
│       ├── Pijamas.tsx
│       ├── Sport.tsx
│       ├── Infantil.tsx
│       ├── Praia.tsx
│       └── Maternidade.tsx
├── types/
│   └── index.ts         # Interfaces TypeScript (Product, Category, etc)
├── App.tsx              # Componente raiz com rotas
├── main.tsx             # Entry point da aplicação
└── index.css            # Design system (variáveis CSS e utilities)
```

## ✨ Funcionalidades Implementadas

### 🛍️ Core E-commerce
- [x] **Catálogo de Produtos**: Listagem com filtros, ordenação e busca
- [x] **Páginas de Categorias**: 8 categorias separadas (Sutiãs, Calcinhas, Modeladores, Pijamas, Sport, Infantil, Praia, Maternidade)
- [x] **Página de Produto (PDP)**: Galeria de imagens, seleção de tamanho/cor, guia de medidas
- [x] **Carrinho de Compras**: Persistente via LocalStorage com contador no header
- [x] **Checkout Completo**: Formulário multi-etapa (dados, entrega, pagamento)
- [x] **Clique & Retire**: Página de lojas físicas com integração futura para mapas
- [x] **Busca**: Campo de busca no header (preparado para integração)

### 👨‍💼 Painel Administrativo
- [x] **Dashboard**: Cards com estatísticas (total produtos, estoque, preço médio, alertas)
- [x] **Gerenciamento de Produtos**: Tabela completa com ações (editar, deletar)
- [x] **Filtros e Busca**: Filtrar por categoria e buscar por nome
- [x] **Adicionar Produtos**: Modal com formulário completo (visual apenas)
- [x] **Indicadores Visuais**: Badges de status, alertas de estoque baixo
- [x] **Rota**: `/admin` (sem autenticação no momento)

### 🎨 Design & UX
- [x] **Design System Completo**: Tokens CSS com suporte a tema claro/escuro
- [x] **Glassmorphism**: Efeito de vidro translúcido em cards e header
- [x] **Animações Suaves**: Framer Motion (fade-in, hover, transições)
- [x] **Responsivo**: Mobile-first com menu hambúrguer
- [x] **Feedback Visual**: Sistema de toast para notificações
- [x] **Hover Effects**: Microinterações em cards e botões
- [x] **Logo da Marca**: Logo UNNA integrado no header

### 📄 Páginas Institucionais
- [x] **Sobre Nós**: História e valores da marca
- [x] **FAQ**: Perguntas frequentes com accordion
- [x] **Política**: Trocas, devoluções e privacidade
- [x] **Newsletter**: Formulário de inscrição no footer
- [x] **404**: Página de erro personalizada

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🧠 Lógica de Funcionamento

### Sistema de Carrinho (`useCart.ts`)
O carrinho é gerenciado por um hook customizado que:
- Armazena dados no **LocalStorage** para persistência
- Expõe métodos: `addItem()`, `removeItem()`, `updateQuantity()`, `clearCart()`
- Calcula automaticamente: `totalItems`, `totalPrice`
- Atualiza o contador no header em tempo real

```typescript
// Exemplo de uso
const { items, addItem, totalPrice } = useCart();
addItem(product, 2); // Adiciona 2 unidades
```

### Mock APIs (`/lib/api`)
As APIs mockadas simulam um backend real:

**`products.ts`**
- `getProducts()`: Lista todos os produtos (com filtros opcionais)
- `getProductBySlug()`: Busca produto por slug
- `getFeaturedProducts()`: Retorna produtos em destaque
- Dados hardcoded com 50+ produtos de exemplo

**`categories.ts`**
- `getCategories()`: Lista todas as 8 categorias
- Estrutura: id, name, slug, description

**`stores.ts`**
- `getStores()`: Lista lojas físicas com endereços
- Preparado para integração com mapas (Google Maps/Mapbox)

### Roteamento (`App.tsx`)
- **React Router v6** com rotas aninhadas
- Header e Footer persistentes em todas as páginas
- Rotas protegidas preparadas para autenticação futura
- 404 para rotas não encontradas

### Sistema de Design (`index.css`)
Todas as cores e estilos são definidos como **variáveis CSS**:
```css
--primary: hsl(90, 18%, 73%);
--background: hsl(90, 18%, 95%);
--glass-bg: 90 18% 95% / 0.6;
```

Classes utilitárias customizadas:
- `.glass` - Efeito glassmorphism
- `.glass-card` - Card com vidro e sombra
- `.glass-hover` - Animação de hover
- `.animate-fade-in` - Animação de entrada

## 🔌 Integração com Backend

O projeto está **100% preparado** para integração com backend:

### Arquitetura Desacoplada
- **Mock APIs** em `/lib/api` podem ser facilmente substituídas por chamadas reais
- **Interfaces TypeScript** tipadas para todos os dados (`Product`, `Category`, `Store`, `CartItem`)
- **Serviços desacoplados** prontos para REST, GraphQL ou Supabase
- **Sem lógica de negócio no componente** - tudo centralizado nos hooks e APIs

### Exemplo de Migração

```typescript
// ❌ ANTES (Mock)
export const getProducts = async (filters?: ProductFilters): Promise<Product[]> => {
  return mockProducts.filter(/* filtros locais */);
};

// ✅ DEPOIS (API Real)
export const getProducts = async (filters?: ProductFilters): Promise<Product[]> => {
  const params = new URLSearchParams(filters);
  const response = await fetch(`${API_URL}/products?${params}`);
  return response.json();
};

// ✅ DEPOIS (Supabase)
export const getProducts = async (filters?: ProductFilters): Promise<Product[]> => {
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('category', filters?.category);
  return data;
};
```

### Pontos de Integração
1. **Autenticação**: Adicionar contexto de usuário e proteger rotas
2. **Produtos**: Conectar APIs de listagem, busca e detalhes
3. **Carrinho**: Migrar de LocalStorage para banco de dados
4. **Checkout**: Integrar gateway de pagamento (Stripe/Mercado Pago)
5. **Admin**: Conectar formulários a APIs CRUD de produtos
6. **Frete**: Integrar com Correios/Melhor Envio
7. **Imagens**: Upload para CDN (Cloudinary/S3)

## 📱 SEO & Acessibilidade

- Meta tags otimizadas em todas as páginas
- Semantic HTML (header, main, footer, article, section)
- Imagens com atributos alt descritivos
- Navegação por teclado funcional
- Contraste WCAG AA
- Fonte legível e responsiva

## 🎯 Roadmap - Próximas Funcionalidades

### Backend (Prioridade Alta)
1. [ ] Conectar APIs reais de produtos (REST ou GraphQL)
2. [ ] Implementar autenticação JWT/OAuth (login/registro)
3. [ ] Integrar gateway de pagamento (Stripe/Mercado Pago/PagSeguro)
4. [ ] Adicionar cálculo de frete real (Correios/Melhor Envio)
5. [ ] Sistema de avaliações e reviews de produtos
6. [ ] Painel admin funcional com CRUD completo
7. [ ] Integração em tempo real com estoque
8. [ ] E-mail transacional (confirmação, rastreamento)
9. [ ] Sistema de cupons de desconto
10. [ ] Dashboard de analytics para admin

### Frontend (Melhorias)
1. [ ] Filtros avançados (preço, tamanho, cor, material)
2. [ ] Wishlist (lista de desejos)
3. [ ] Comparador de produtos
4. [ ] Histórico de pedidos
5. [ ] Chat de atendimento ao cliente
6. [ ] Sistema de pontos/fidelidade
7. [ ] Recomendações personalizadas (IA)
8. [ ] PWA (Progressive Web App)
9. [ ] Testes automatizados (Jest + Testing Library)
10. [ ] Internacionalização (i18n)

## 🚀 Performance & Otimizações

- **Code Splitting**: Rotas carregadas sob demanda
- **Lazy Loading**: Imagens otimizadas com loading progressivo
- **Memoization**: Componentes otimizados com React.memo
- **Bundle Size**: Tree-shaking automático via Vite
- **CSS**: Tailwind com PurgeCSS remove classes não utilizadas

## 🔐 Considerações de Segurança

### Implementado
- Validação client-side de formulários
- Sanitização de inputs
- Rotas preparadas para autenticação futura
- HTTPS ready (produção)

### A Implementar (Backend)
- Rate limiting
- CORS configurado
- JWT tokens com refresh
- Criptografia de senhas (bcrypt)
- Proteção contra XSS e SQL injection
- RLS (Row Level Security) no Supabase

## 📚 Documentação Técnica

### Componentes Principais

**Header** (`components/layout/Header.tsx`)
- Logo UNNA com link para home
- Menu de navegação com 8 categorias
- Campo de busca (desktop e mobile)
- Contador do carrinho em tempo real
- Menu hambúrguer responsivo com AnimatePresence

**ProductCard** (`components/products/ProductCard.tsx`)
- Imagem com hover zoom
- Badge de desconto (quando aplicável)
- Botão "Adicionar ao Carrinho"
- Link para página de detalhes

**useCart Hook** (`hooks/useCart.ts`)
- Estado global do carrinho
- Persistência em LocalStorage
- Métodos CRUD (Create, Read, Update, Delete)
- Cálculos automáticos de totais

### Tipos TypeScript

```typescript
interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
}

interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}
```

## 🧪 Como Testar

### Navegação do Site
1. **Home**: Hero section, categorias em destaque, produtos featured
2. **Categorias**: Clique em qualquer categoria (ex: `/sutias`)
3. **Produto**: Clique em um card para ver detalhes
4. **Carrinho**: Adicione produtos e veja o contador atualizar
5. **Checkout**: Simule uma compra completa
6. **Admin**: Acesse `/admin` para ver o painel administrativo

### Carrinho de Compras
```
1. Adicione produtos ao carrinho
2. Veja o contador no header aumentar
3. Abra o carrinho (ícone no header)
4. Altere quantidades
5. Remova itens
6. Vá para o checkout
7. Recarregue a página - dados persistem!
```

### Responsividade
- Desktop: Menu horizontal, busca visível
- Mobile: Menu hambúrguer, busca no menu
- Teste em diferentes resoluções (375px, 768px, 1920px)

## 📄 Licença

Projeto desenvolvido para fins educacionais e comerciais.

---

**Desenvolvido com ❤️ por [Seu Nome]**

Stack: React + TypeScript + TailwindCSS + Framer Motion + shadcn/ui

💡 Dúvidas? Abra uma issue ou entre em contato!
