import { useEffect, useState } from 'react';
import { ProductGrid } from '@/components/products/ProductGrid';
import { getProducts } from '@/lib/api/products';
import { Product } from '@/types';
import { motion } from 'framer-motion';

const Praia = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts({ category: 'praia' }).then(products => {
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
        <h1 className="text-4xl md:text-5xl font-light mb-4">Praia</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Elegância sob o sol. Biquínis e maiôs sofisticados com tecidos de secagem 
          rápida, proteção UV e modelagem impecável.
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
        <h2 className="text-2xl font-light mb-6 text-center">Modelos para Todos os Estilos</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-medium mb-2">Biquíni</h3>
            <p className="text-sm text-muted-foreground">Versatilidade e liberdade</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Maiô</h3>
            <p className="text-sm text-muted-foreground">Elegância e cobertura</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Saídas de Praia</h3>
            <p className="text-sm text-muted-foreground">Sofisticação casual</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Praia;
