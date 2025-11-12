import { useEffect, useState } from 'react';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getProducts } from '@/lib/api/products';
import { Product } from '@/types';
import { motion } from 'framer-motion';

const Infantil = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts({ category: 'infantil' }).then(products => {
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
        <h1 className="text-4xl md:text-5xl font-light mb-4">Infantil</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Conforto e delicadeza para as pequenas. Lingerie infantil em tecidos suaves, 
          hipoalergênicos e com estampas encantadoras.
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
        <h2 className="text-2xl font-light mb-6 text-center">Cuidado Especial</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-medium mb-2">Tecidos Suaves</h3>
            <p className="text-sm text-muted-foreground">100% algodão hipoalergênico</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Sem Aros</h3>
            <p className="text-sm text-muted-foreground">Máximo conforto e liberdade</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Costura Plana</h3>
            <p className="text-sm text-muted-foreground">Não irrita a pele delicada</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Infantil;
