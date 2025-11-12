import { useEffect, useState } from 'react';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getProducts } from '@/lib/api/products';
import { Product } from '@/types';
import { motion } from 'framer-motion';

const Calcinhas = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts({ category: 'calcinhas' }).then(products => {
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
        <h1 className="text-4xl md:text-5xl font-light mb-4">Calcinhas</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Maciez e elegância em cada modelo. Calcinhas em tecidos premium com acabamento 
          invisível e conforto absoluto para o seu dia a dia.
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
        <h2 className="text-2xl font-light mb-6 text-center">Modelos para Todos os Momentos</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-medium mb-2">Fio Dental</h3>
            <p className="text-sm text-muted-foreground">Discreto e invisível sob as roupas</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Cintura Alta</h3>
            <p className="text-sm text-muted-foreground">Modelagem e conforto superiores</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Tradicional</h3>
            <p className="text-sm text-muted-foreground">Clássico atemporal e versátil</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Calcinhas;
