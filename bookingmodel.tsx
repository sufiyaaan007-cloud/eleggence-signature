import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-primary border border-white/10 rounded-[3rem] p-16 shadow-2xl">
            <h2 className="text-4xl font-display font-bold text-white">Book Your <span className="italic text-accent">Experience</span></h2>
            {/* Form Fields: Name, Phone, Service, Date */}
            <button className="btn-primary w-full mt-8">Confirm Reservation</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
