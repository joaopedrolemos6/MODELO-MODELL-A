import { Link } from 'react-router-dom';
import { Product } from '@/types';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.compareAtPrice 
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Link to={`/products/${product.slug}`}>
        <div className="glass-card glass-hover overflow-hidden group">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-muted/30">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {discount > 0 && (
                <span className="glass glass-dark px-2 py-1 text-xs font-medium text-primary-foreground rounded-full">
                  -{discount}%
                </span>
              )}
              {!product.inStock && (
                <span className="glass glass-dark px-2 py-1 text-xs font-medium rounded-full">
                  Esgotado
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="p-4 space-y-2">
            <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem]">
              {product.name}
            </h3>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Star className="w-3 h-3 fill-primary text-primary" />
                <span>{product.rating}</span>
                <span>({product.reviewCount})</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold">
                R$ {product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  R$ {product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Colors */}
            <div className="flex gap-1.5 pt-2">
              {product.colors.slice(0, 4).map((color) => (
                <div
                  key={color.name}
                  className="w-5 h-5 rounded-full border-2 border-white/50 shadow-sm"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 4 && (
                <div className="w-5 h-5 rounded-full border-2 border-white/50 flex items-center justify-center text-[10px] text-muted-foreground">
                  +{product.colors.length - 4}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
