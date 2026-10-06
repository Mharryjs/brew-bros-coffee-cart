import { BRAND_INFO, MenuItem } from "../data/brewBrosData";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: { item: MenuItem; quantity: number }[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemove,
  onClear,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const total = items.reduce(
    (sum, entry) => sum + entry.item.price * entry.quantity,
    0
  );

  const orderSummary = items
    .map(
      (entry) =>
        `• ${entry.quantity}x ${entry.item.name} (Rs. ${entry.item.price * entry.quantity})`
    )
    .join("\n");

  const whatsappMessage = encodeURIComponent(
    `Hi Brew Bros Quetta! I'd like to place an order from your coffee cart opposite Jamia Masjid, Jinnah Town:\n\n${orderSummary}\n\n*Total:* Rs. ${total}\n\nPickup time: ~20 mins`
  );

  return (
    <div className="fixed inset-0 z-[150] overflow-hidden select-none">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-roast-950/80 backdrop-blur-md transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-roast-950 border-l gold-border p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-gold/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gold/15 text-gold-light">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-cream">
                    Your Coffee Order
                  </h3>
                  <p className="text-[11px] text-sand">
                    Brew Bros Cart • Jinnah Town
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/5 text-sand hover:text-cream transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="mt-6 flex flex-col gap-4">
              {items.length === 0 ? (
                <div className="py-16 text-center text-sand">
                  <ShoppingBag size={42} className="mx-auto text-gold/30 mb-3" />
                  <p className="font-display text-lg text-cream">Your cart is empty</p>
                  <p className="text-xs text-sand/80 mt-1">
                    Select a Spanish Latte, Cortado, or Croissant to add.
                  </p>
                </div>
              ) : (
                items.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="p-3 rounded-2xl glass-panel border gold-border flex items-center justify-between gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm font-bold text-cream truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gold-light font-medium">
                        Rs. {item.price} each
                      </p>

                      {/* Quantity Toggles */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 text-cream text-xs flex items-center justify-center font-bold cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-cream px-1">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 text-cream text-xs flex items-center justify-center font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between self-stretch">
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-sand/50 hover:text-red-400 p-1 transition-colors cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                      <span className="font-display text-sm font-bold text-cream">
                        Rs. {item.price * quantity}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer & Checkout via WhatsApp */}
          {items.length > 0 && (
            <div className="mt-8 pt-4 border-t border-gold/20 flex flex-col gap-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-sand">Subtotal</span>
                <span className="font-display text-2xl font-bold text-gold-light">
                  Rs. {total}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-roast-900 border border-gold/20 text-[11px] text-cream-muted leading-relaxed">
                📍 <strong>Pickup Spot:</strong> {BRAND_INFO.location}
                <br />
                🕒 <strong>Timing:</strong> {BRAND_INFO.timings}
              </div>

              <a
                href={`https://wa.me/923337890123?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-102"
              >
                <WhatsAppIcon size={18} />
                <span>Send Order via WhatsApp</span>
              </a>

              <button
                onClick={onClear}
                className="text-[11px] uppercase tracking-wider text-sand/60 hover:text-sand text-center cursor-pointer"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
