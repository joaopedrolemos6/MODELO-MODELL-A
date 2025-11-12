import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductBySlug } from '@/lib/api/products';
import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { Star, ShoppingBag, Truck, RefreshCw, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [mainImage, setMainImage] = useState(0);
  const { addItem } = useCart();
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      getProductBySlug(slug).then(product => {
        setProduct(product);
        if (product) {
          setSelectedColor(product.colors[0].name);
        }
        setLoading(false);
      });
    }
  }, [slug]);

  const handleAddToCart = () => {
    if (!product || !selectedSize) {
      toast({
        title: "Selecione um tamanho",
        description: "Por favor, escolha o tamanho desejado antes de adicionar ao carrinho.",
        variant: "destructive"
      });
      return;
    }

    addItem(product, selectedSize, selectedColor, 1);
    toast({
      title: "Adicionado ao carrinho!",
      description: `${product.name} foi adicionado ao seu carrinho.`
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse grid md:grid-cols-2 gap-8">
          <div className="aspect-square bg-muted/30 rounded-2xl" />
          <div className="space-y-4">
            <div className="h-8 bg-muted/30 rounded w-3/4" />
            <div className="h-6 bg-muted/30 rounded w-1/2" />
            <div className="h-24 bg-muted/30 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="glass-card p-12 text-center">
          <h2 className="text-2xl font-light mb-4">Produto não encontrado</h2>
          <Link to="/products">
            <Button>Voltar para produtos</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-foreground transition-colors">Produtos</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ChevronLeft className="w-4 h-4" />
        Voltar
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card overflow-hidden mb-4">
            <div className="aspect-square">
              <img
                src={product.images[mainImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(index)}
                  className={`glass-card overflow-hidden w-20 h-20 ${mainImage === index ? 'ring-2 ring-primary' : ''}`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-3xl font-light mb-4">{product.name}</h1>
            
            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating!) ? 'fill-primary text-primary' : 'text-muted'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} avaliações)
                </span>
              </div>
            )}

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-semibold">R$ {product.price.toFixed(2)}</span>
              {product.compareAtPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  R$ {product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-muted-foreground">{product.description}</p>
          </div>

          {/* Color Selection */}
          <div>
            <label className="text-sm font-medium mb-3 block">
              Cor: <span className="text-muted-foreground">{selectedColor}</span>
            </label>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor === color.name ? 'border-primary scale-110' : 'border-white/50'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <label className="text-sm font-medium mb-3 block">Tamanho</label>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`glass-card py-3 text-center transition-all ${
                    selectedSize === size ? 'ring-2 ring-primary bg-primary/10' : ''
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <Button 
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            <ShoppingBag className="mr-2 w-5 h-5" />
            {product.inStock ? 'Adicionar ao Carrinho' : 'Esgotado'}
          </Button>

          {/* Benefits */}
          <div className="glass-card p-4 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-primary" />
              <span>Frete grátis acima de R$ 199</span>
            </div>
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-primary" />
              <span>Troca grátis em até 30 dias</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
