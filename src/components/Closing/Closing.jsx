import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./Closing.css";

function Closing() {
  return (
    <section className="closing-section">
      <div className="closing-container">

        {/* IMAGE */}
       

        {/* CONTENT */}
        <motion.div
          className="closing-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >

         

          <h2>
            Better digital
            
             experiences.
             
            <span> Better first impressions.</span>
          </h2>

          

          <p className="closing-thankyou">
            Thank you for choosing Snappy Tales
            as your growth partner.
          </p>

          

        </motion.div>

        

      </div>
    </section>
  );
}

export default Closing;