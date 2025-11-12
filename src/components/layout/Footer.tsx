import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Footer = () => {
  return (
    <footer className="glass glass-dark border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-light mb-4">Modellá</h3>
            <p className="text-sm text-muted-foreground">
              Lingerie sofisticada e confortável para todas as mulheres.
            </p>
            <div className="flex gap-3 mt-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-medium mb-4">Comprar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/sutias" className="hover:text-foreground transition-colors">Sutiãs</Link></li>
              <li><Link to="/calcinhas" className="hover:text-foreground transition-colors">Calcinhas</Link></li>
              <li><Link to="/modeladores" className="hover:text-foreground transition-colors">Modeladores</Link></li>
              <li><Link to="/sport" className="hover:text-foreground transition-colors">Sport</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-medium mb-4">Ajuda</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">Sobre Nós</Link></li>
              <li><Link to="/stores" className="hover:text-foreground transition-colors">Lojas</Link></li>
              <li><Link to="/policy" className="hover:text-foreground transition-colors">Trocas e Devoluções</Link></li>
              <li><Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receba novidades e ofertas exclusivas
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Seu e-mail"
                className="glass glass-dark border-white/10"
              />
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                OK
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Modellá. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
