import { useEffect, useState } from 'react';
import { getStores } from '@/lib/api/stores';
import { Store } from '@/types';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Stores = () => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    getStores().then(setStores);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-light mb-4">Nossas Lojas</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Conheça nossas lojas físicas e aproveite o Clique & Retire. 
          Compre online e retire em uma de nossas unidades.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {stores.map((store, index) => (
          <motion.div
            key={store.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card p-6 space-y-4"
          >
            <h2 className="text-xl font-medium">{store.name}</h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p>{store.address}</p>
                  <p className="text-muted-foreground">{store.city} - {store.state}, {store.zipCode}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p>{store.phone}</p>
              </div>

              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <p>{store.hours}</p>
              </div>
            </div>

            {/* Mock Map */}
            <div className="aspect-video glass rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-primary/50" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
