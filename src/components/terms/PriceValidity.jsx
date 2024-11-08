import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PriceValidity = () => {
  return (
    <Card className=" mx-[5%] md:mx-[15%] p-6 bg-white">
      <CardContent className="space-y-4">
        <h1 className="font-bold text-lg mb-4">Price Validity</h1>
        
        <div className="space-y-4">
          <ol className="list-decimal pl-6 space-y-3">
            <li className="text-justify">
              The exact price of the Customer project will depend on measurements, scope of work and change in designs / material / finishes. Based on these revisions, 
              Customers can expect the quote value to rise or drop by approximately ±10%. However, in case of non standard product selection / customization / additional scope 
              of work, the prices may substantially increase from the initial quote value.
            </li>
            
            <li className="text-justify">
              Based on Customer&apos;s initial discussion with the HomeLane representatives, Customer shall make an initial payment of either 5% of quote value or ₹NR 25,000, 
              whichever is higher, for booking the order with HomeLane, subject to terms and conditions mentioned herein, if applicable.
            </li>
            
            <li className="text-justify">
              The Price structure has 4 Installments:
              <ol className="list-[lower-alpha] pl-6 mt-2 space-y-2">
                <li>First Installment - 5% of the quote value or INR 25,000, whichever is higher and is paid at the time of order booking.</li>
                <li>Second Installment - 15% of the quote value, which is payable at the time of First Cut Design Finalization. The Customer order shall move to the site marking and 
                  design finalization stage only after payment of the Second Installment.</li>
                <li>Third Installment - 30% of the quote value, which is payable at the time of signing of the Works Contract. The Customer order shall move to the production stage 
                  only after payment of the Third Installment.</li>
                <li>Fourth/Final Installment - Remaining 50% of the quote value, which is payable as per the due date mentioned in the "Ready to Dispatch" email sent to the 
                  Customer.</li>
              </ol>
            </li>
          </ol>

          <p className="font-bold text-justify">Note: A non-refundable Convenience fee of 2% (including GST) on payment amount may be levied on certain modes of payment including Credit card.</p>

          <ol className="list-decimal pl-6 space-y-3">
            <li className="text-justify">
              The name used for order booking should be in line with the KYC of the customer. No name change or GST number inclusion is possible once order is booked. Disclosing 
              complete names at the time of order booking will help for all legal communications, availing finance options, GST Invoice in case of registered person and processing 
              refund if in case of cancellation as specified in this terms and conditions.
            </li>
            
            <li className="text-justify">
              For booking an order with HomeLane, Customer quote value should include a minimum of INR 1,50,000 of "woodwork". In case of the quote value having woodwork 
              less than INR 1,50,000, the same shall not be accepted.
            </li>
            
            <li className="text-justify">
              The initial quote value provided by HomeLane at the time of order booking may not include civil, plumbing, gas-piping or electrical work. The exact value of the quote 
              will depend on the site conditions.
            </li>
            
            <li className="text-justify">
              The Fourth/ final installment payment has to be completed before the material dispatch from the factory and not before installation. HomeLane shall not dispatch the 
              materials, unless the Final Installment is received and approved by HomeLane.
            </li>
            
            <li className="text-justify">
              Between First Installment and Third Installment payment stage of Customer order brand partnered categories such as appliances, lights and loose furniture etc. are 
              subject to price fluctuation and may not be available due to stock issues from the manufacturer&apos;s end. In such cases, the Customer will have an option to choose the 
              other available products.
            </li>
            
            <li className="text-justify">
              We have categorised the work of HomeLane as interior solutions and has been considered as "Works Contract Services of Interior Solutions" (SAC 995476). Place of 
              supply will be considered based on the state where the installation is to be carried out irrespective of bill to state. GST will be collected on each advance payment and 
              GST invoices are raised upon completion of the project.
            </li>
            
            <li className="text-justify">
              If a customer wishes to make payments in cash, HomeLine can accept cash up to Rs.199,999/- between all the stages of the respective project.
              <ol className="list-[lower-alpha] pl-6 mt-2 space-y-2">
                <li>Maximum amount of cash that HomeLane accepts without PAN is Rs.49,999/-</li>
                <li>Maximum amount of cash that HomeLane accepts with PAN is Rs.1,99,999/- and note that, PAN should belong to the customer ONLY and it is mandatory to obtain 
                  copy of the PAN from a customer and to be shared with Finance team to approve payments.</li>
                <li>Orders can not be split to accommodate additional cash from a customer.</li>
              </ol>
            </li>
            
            <li className="text-justify">
              If the fourth installment (i.e. the final 50 % of the estimate) is not paid by the Customer within the time stipulated in the &quot;Ready to dispatch&quot; email sent to the 
              Customer, then the Customer shall be liable to pay a demurrage charge of INR 500 per day, from the second day that the instalment becomes due till such time that 
              the same is paid in full.
            </li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceValidity;