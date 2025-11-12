import { useEffect, useState } from 'react';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getProducts } from '@/lib/api/products';
import { Product } from '@/types';
import { motion } from 'framer-motion';

const Sutias = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts({ category: 'sutias' }).then(products => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-light mb-4">Sutiãs</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Conforto e sustentação perfeita. Nossa coleção de sutiãs combina design sofisticado 
          com tecnologia de modelagem anatômica para todos os momentos do seu dia.
        </p>
      </motion.div>

      {/* Products Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          {loading ? 'Carregando...' : `${products.length} produtos encontrados`}
        </p>
      </div>

      {/* Products Grid */}
      <ProductGrid products={products} loading={loading} />

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card p-8 mt-12"
      >
        <h2 className="text-2xl font-light mb-6 text-center">Encontre o Sutiã Perfeito</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-medium mb-2">Com Bojo</h3>
            <p className="text-sm text-muted-foreground">Realce natural e conforto o dia todo</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Sem Bojo</h3>
            <p className="text-sm text-muted-foreground">Leveza e liberdade de movimento</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Esportivos</h3>
            <p className="text-sm text-muted-foreground">Sustentação ideal para atividades físicas</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sutias;
