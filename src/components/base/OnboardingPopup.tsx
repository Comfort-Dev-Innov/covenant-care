'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { LuDownload } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface OnboardingPopupProps {
    isOpen: boolean;
    onClose: () => void;
    planType: 'Individual' | 'Family';
}

const OnboardingPopup: React.FC<OnboardingPopupProps> = ({ isOpen, onClose, planType }) => {
    const [clickedButtons, setClickedButtons] = useState<Set<string>>(new Set());
    const [showProcessingModal, setShowProcessingModal] = useState(false);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    if (!isOpen && !showProcessingModal && !showPaymentModal) return null;

    const handleButtonClick = (buttonId: string, action: () => void) => {
        setClickedButtons(prev => new Set(prev).add(buttonId));
        action();
    };

    const handleDownloadForm = () => {
        const link = document.createElement('a');
        link.href = planType === 'Individual' 
            ? '/assets/forms/CCAI-FORM-new-indiv.pdf'
            : '/assets/forms/CCAI-FORM-new-family.pdf';
        link.download = `covenant-care-${planType.toLowerCase()}-customer-form.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleSendForm = () => {
        window.location.href = 'mailto:carecovenantinc@gmail.com?subject=Care Plan Application Form';
    };

    const handleViewPaymentChannels = () => {
        setShowPaymentModal(true);
    };

    const handleSendProof = () => {
        window.location.href = 'mailto:carecovenantinc@gmail.com?subject=Proof of Payment';
    };

    const handleDone = () => {
        setShowProcessingModal(true);
    };

    const handleCloseProcessing = () => {
        setShowProcessingModal(false);
        setClickedButtons(new Set());
        onClose();
    };

    const allButtonsClicked = clickedButtons.size === 4;

    if (showProcessingModal) {
        return (
            <AnimatePresence>
                <motion.div 
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999999] px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div 
                        className="bg-[#E8DED2] rounded-2xl p-8 max-w-[1120px] w-full relative shadow-2xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.4, type: "spring", damping: 20 }}
                    >
                        <button
                            onClick={handleCloseProcessing}
                            className="absolute top-6 right-6 text-3xl md:text-5xl hover:cursor-pointer text-primary hover:text-primary/80 transition-colors"
                        >
                            <IoMdClose />
                        </button>

                        <h2 className="font-archivo-black text-primary text-[28px] md:text-[36px] mb-8">
                            Application Processing
                        </h2>

                        <div className="flex flex-col items-center justify-center py-12">
                            {/* Clock Icon */}
                            <motion.div 
                                className="w-32 h-32 rounded-full bg-[#D4A017] flex items-center justify-center mb-8 border-8 border-primary"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                            >
                                <div className="relative w-16 h-16">
                                    <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-primary origin-bottom -translate-x-1/2 -translate-y-full rotate-45"></div>
                                    <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-primary origin-bottom -translate-x-1/2 -translate-y-full rotate-90"></div>
                                    <div className="absolute top-2 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2"></div>
                                    <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2"></div>
                                    <div className="absolute top-1/2 left-2 w-2 h-2 bg-primary rounded-full -translate-y-1/2"></div>
                                    <div className="absolute top-1/2 right-2 w-2 h-2 bg-primary rounded-full -translate-y-1/2"></div>
                                </div>
                            </motion.div>

                            <motion.h3 
                                className="font-archivo-black text-primary text-[32px] md:text-[48px]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                Thank You!
                            </motion.h3>
                            <motion.p 
                                className="font-inter text-primary text-light text-[16px] md:text-[20px] text-center mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Your application is under review we will contact you in 2 - 3 business days
                            </motion.p>

                            <motion.p 
                                className="font-inter text-black/70 text-[14px] md:text-[16px] text-center max-w-2xl mb-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                With <span className="italic font-semibold">Covenant Care</span> you and your family are insured with peace, dignity, and security — because every life deserves love and care.
                            </motion.p>

                            <motion.button
                                onClick={handleCloseProcessing}
                                className="hover:cursor-pointer bg-primary hover:bg-primary/90 text-white font-inter font-semibold px-12 py-3 rounded-lg text-[18px] transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                Close
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        );
    }

    return (
        <>
            {/* Main Onboarding Modal */}
            <AnimatePresence>
                <motion.div 
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999999] px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div 
                        className={`bg-[#E8DED2] rounded-2xl p-8 max-w-[1120px] w-full relative shadow-2xl max-h-[90vh] overflow-y-auto transition-all duration-300 ${
                            showPaymentModal ? 'brightness-75 scale-95' : 'brightness-100 scale-100'
                        }`}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-3xl md:text-5xl text-primary hover:text-primary/80 transition-colors hover:cursor-pointer"
                    >
                        <IoMdClose />
                    </button>

                    <motion.h2 
                        className="font-archivo-black text-primary text-[20px] md:text-[32px] mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        Onboarding: {planType} Care Plan
                    </motion.h2>

                {/* Step 1 */}
                <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <div className="mb-3">
                        <span className="font-archivo-black text-primary text-[18px] md:text-[20px] mr-4">Step 1</span>
                        <span className="font-inter text-primary text-[16px] md:text-[18px]">Download and Fill Up the Form</span>
                    </div>
                    <button
                        onClick={() => handleButtonClick('download', handleDownloadForm)}
                        className="bg-[#D4A017] hover:bg-[#C09015] hover:cursor-pointer max-md:text-[14px] text-primary font-inter font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <LuDownload size={20} />
                        Customer Form
                    </button>
                </motion.div>

                {/* Step 2 */}
                <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                >
                    <div>
                        <span className="font-archivo-black text-primary text-[18px] md:text-[20px] mr-4">Step 2</span>
                        <span className="font-inter text-primary text-[16px] md:text-[18px]">Email your form to </span>
                        <span className="font-inter font-semibold text-primary text-[16px] md:text-[18px]">carecovenantinc@gmail.com</span>
                    </div>
                    <p className="text-sm text-primary/70 mb-3 font-inter max-md:text-[14px]">
                        Note: Ensure that the form contents are true and correct, else this may void your application.
                    </p>
                    <button
                        onClick={() => handleButtonClick('sendForm', handleSendForm)}
                        className="bg-[#D4A017] hover:bg-[#C09015] hover:cursor-pointer max-md:text-[14px] text-primary font-inter font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <MdEmail size={20} />
                        Send Form
                    </button>
                </motion.div>

                {/* Step 3 */}
                <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                >
                    <div>
                        <span className="font-archivo-black text-primary text-[18px] md:text-[20px] mr-4">Step 3</span>
                        <span className="font-inter text-primary text-[16px] md:text-[18px]">You may send your payment to the following payment channels</span>
                    </div>
                    <p className="text-sm text-primary/70 mb-3 font-inter max-md:text-[14px]">
                        Note: Ensure that the form contents are true and correct, else this may void your application.
                    </p>
                    <button
                        onClick={() => handleButtonClick('viewPayment', handleViewPaymentChannels)}
                        className="bg-[#D4A017] hover:bg-[#C09015] max-md:text-[14px] hover:cursor-pointer text-primary font-inter font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <FaMoneyBillWave size={20} />
                        View Payment Channels
                    </button>
                </motion.div>

                {/* Step 4 */}
                <motion.div 
                    className="mb-6 md:mb-12"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                >
                    <div>
                        <span className="font-archivo-black text-primary text-[18px] md:text-[20px] mr-4">Step 4</span>
                        <span className="font-inter text-primary text-[16px] md:text-[18px]">Send your proof of payment to </span>
                        <span className="font-inter font-semibold text-primary text-[16px] md:text-[18px]">carecovenantinc@gmail.com</span>
                    </div>
                    <p className="text-sm text-primary/70 mb-3 font-inter max-md:text-[14px]">
                        Note: Your payment may reflect at different times due to your bank&apos;s operations, your request will be reviewed as soon as possible.
                    </p>
                    <button
                        onClick={() => handleButtonClick('sendProof', handleSendProof)}
                        className="bg-[#D4A017] hover:bg-[#C09015] max-md:text-[14px] hover:cursor-pointer text-primary font-inter font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <MdEmail size={20} />
                        Send Proof
                    </button>
                </motion.div>

                {/* Done Button */}
                <motion.div 
                    className="flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    <button
                        onClick={handleDone}
                        disabled={!allButtonsClicked}
                        className={`font-inter font-semibold px-12 py-3 rounded-lg text-[18px] transition-colors ${
                            allButtonsClicked
                                ? 'bg-primary hover:bg-primary/90 text-white cursor-pointer'
                                : 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-50'
                        }`}
                    >
                        Done
                    </button>
                </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>

        {/* Payment Channels Modal - Overlays on top of main modal */}
        <AnimatePresence>
            {showPaymentModal && (
                <motion.div 
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999999] px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setShowPaymentModal(false)}
                >
                    <motion.div 
                        className="bg-[#E8DED2] rounded-2xl p-8 max-w-[800px] w-full relative shadow-2xl max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.5, opacity: 0, y: 100 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.5, opacity: 0, y: 100 }}
                        transition={{ 
                            duration: 0.5, 
                            type: "spring", 
                            damping: 15, 
                            stiffness: 300,
                            bounce: 0.4 
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowPaymentModal(false)}
                            className="absolute top-6 right-6 text-3xl md:text-5xl hover:cursor-pointer text-primary hover:text-primary/80 transition-colors"
                        >
                            <IoMdClose />
                        </button>

                        <motion.h2 
                            className="font-archivo-black text-primary text-[24px] md:text-[32px] mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            Payment Channels
                        </motion.h2>

                        <div className="space-y-6">
                            {/* GCash */}
                            <motion.div 
                                className="bg-white rounded-lg p-6 flex flex-col items-center"
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.2,
                                    type: "spring",
                                    damping: 12,
                                    stiffness: 200
                                }}
                            >
                                <h3 className="font-inter font-bold text-primary text-[20px] mb-4">GCash</h3>
                                <Image
                                    src="/assets/image/gcash-qr.png"
                                    alt="GCash QR Code"
                                    width={300}
                                    height={300}
                                    className="rounded-lg"
                                />
                            </motion.div>
                        </div>

                        <motion.div 
                            className="mt-8 flex justify-end"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.4, 
                                delay: 0.4,
                                type: "spring",
                                damping: 15
                            }}
                        >
                            <button
                                onClick={() => setShowPaymentModal(false)}
                                className="bg-primary hover:bg-primary/90 text-white font-inter font-semibold px-8 py-3 rounded-lg text-[16px] transition-colors hover:cursor-pointer"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
};

export default OnboardingPopup;

