import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getFeaturedProducts } from '@/lib/api/products';
import { Product } from '@/types';
import { motion } from 'framer-motion';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedProducts().then(products => {
      setFeaturedProducts(products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1583846112914-a8a77f5c2e84?w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tight">
              Sofisticação<br />em cada detalhe
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Lingerie premium que une conforto, elegância e qualidade excepcional
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Link to="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                  Explorar Coleção
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/stores">
                <Button size="lg" variant="outline" className="glass glass-dark rounded-full px-8">
                  Nossas Lojas
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-light text-center mb-12">Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Sutiãs', path: '/sutias' },
              { name: 'Calcinhas', path: '/calcinhas' },
              { name: 'Modeladores', path: '/modeladores' },
              { name: 'Sport', path: '/sport' }
            ].map((category) => (
              <Link 
                key={category.name}
                to={category.path}
                className="glass-card glass-hover aspect-square flex items-center justify-center group"
              >
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-light">Produtos em Destaque</h2>
            <Link to="/products">
              <Button variant="ghost" className="gap-2">
                Ver Todos
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <ProductGrid products={featuredProducts} loading={loading} />
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-medium mb-2">Frete Grátis</h3>
              <p className="text-muted-foreground">Em compras acima de R$ 199</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Troca Facilitada</h3>
              <p className="text-muted-foreground">Até 30 dias para trocar</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Clique & Retire</h3>
              <p className="text-muted-foreground">Retire em nossas lojas</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
