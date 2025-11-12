import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { CreditCard, Building } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handleFinish = () => {
    // Simulate order completion
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="glass-card p-12 text-center max-w-md mx-auto">
          <h2 className="text-2xl font-light mb-4">Carrinho vazio</h2>
          <Link to="/products">
            <Button>Voltar para Produtos</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-light mb-8">Finalizar Compra</h1>

      {/* Steps */}
      <div className="flex gap-4 mb-8">
        {['Dados', 'Entrega', 'Pagamento'].map((label, index) => (
          <div
            key={label}
            className={`flex-1 glass-card p-3 text-center transition-all ${
              step === index + 1 ? 'ring-2 ring-primary' : ''
            }`}
          >
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2 space-y-6">
          {step === 1 && (
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-xl font-medium mb-4">Dados Pessoais</h2>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Maria Silva" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="maria@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" />
                  </div>
                </div>
                <Button onClick={() => setStep(2)} className="bg-primary hover:bg-primary/90">
                  Continuar para Entrega
                </Button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-xl font-medium mb-4">Endereço de Entrega</h2>
              <div className="grid gap-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <Label htmlFor="cep">CEP</Label>
                    <Input id="cep" placeholder="00000-000" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="street">Rua</Label>
                    <Input id="street" placeholder="Rua das Flores" />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="number">Número</Label>
                    <Input id="number" placeholder="123" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="complement">Complemento</Label>
                    <Input id="complement" placeholder="Apto 45" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">Cidade</Label>
                    <Input id="city" placeholder="São Paulo" />
                  </div>
                  <div>
                    <Label htmlFor="state">Estado</Label>
                    <Input id="state" placeholder="SP" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(1)}>Voltar</Button>
                  <Button onClick={() => setStep(3)} className="flex-1 bg-primary hover:bg-primary/90">
                    Continuar para Pagamento
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="glass-card p-6 space-y-4">
              <h2 className="text-xl font-medium mb-4">Forma de Pagamento</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2 glass-card p-4">
                  <RadioGroupItem value="credit" id="credit" />
                  <Label htmlFor="credit" className="flex-1 cursor-pointer flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Cartão de Crédito
                  </Label>
                </div>
                <div className="flex items-center space-x-2 glass-card p-4">
                  <RadioGroupItem value="pix" id="pix" />
                  <Label htmlFor="pix" className="flex-1 cursor-pointer flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    PIX
                  </Label>
                </div>
              </RadioGroup>

              {paymentMethod === 'credit' && (
                <div className="space-y-4 pt-4">
                  <div>
                    <Label htmlFor="cardNumber">Número do Cartão</Label>
                    <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Validade</Label>
                      <Input id="expiry" placeholder="MM/AA" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-2 pt-4">
                <Button variant="outline" onClick={() => setStep(2)}>Voltar</Button>
                <Button onClick={handleFinish} className="flex-1 bg-primary hover:bg-primary/90">
                  Finalizar Pedido
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6 space-y-4 sticky top-24">
            <h2 className="text-xl font-medium">Resumo do Pedido</h2>
            <div className="space-y-2">
              {items.map(item => (
                <div key={`${item.product.id}-${item.size}`} className="flex justify-between text-sm">
                  <span className="text-muted-foreground truncate mr-2">
                    {item.quantity}x {item.product.name}
                  </span>
                  <span className="font-medium whitespace-nowrap">
                    R$ {(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>R$ {totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
