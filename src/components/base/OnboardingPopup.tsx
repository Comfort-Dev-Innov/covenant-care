'use client'
import React, { useState } from 'react';
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

    if (!isOpen) return null;

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
        // This could open another modal or navigate to a payment info page PLACEHOLDER ONLY
        alert('Payment Channels:\n\n• GCash: 0917-XXX-XXXX\n• PayMaya: 0917-XXX-XXXX\n• Bank Transfer: [Bank Details]');
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
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999999] px-4">
                <div className="bg-[#E8DED2] rounded-2xl p-8 max-w-[1120px] w-full relative shadow-2xl">
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
                        <div className="w-32 h-32 rounded-full bg-[#D4A017] flex items-center justify-center mb-8 border-8 border-primary">
                            <div className="relative w-16 h-16">
                                <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-primary origin-bottom -translate-x-1/2 -translate-y-full rotate-45"></div>
                                <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-primary origin-bottom -translate-x-1/2 -translate-y-full rotate-90"></div>
                                <div className="absolute top-2 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2"></div>
                                <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2"></div>
                                <div className="absolute top-1/2 left-2 w-2 h-2 bg-primary rounded-full -translate-y-1/2"></div>
                                <div className="absolute top-1/2 right-2 w-2 h-2 bg-primary rounded-full -translate-y-1/2"></div>
                            </div>
                        </div>

                        <h3 className="font-archivo-black text-primary text-[32px] md:text-[48px]">
                            Thank You!
                        </h3>
                        <p className="font-inter text-primary text-light text-[16px] md:text-[20px] text-center mb-12">
                            Your application is under review we will contact you in 2 - 3 business days
                        </p>

                        <p className="font-inter text-black/70 text-[14px] md:text-[16px] text-center max-w-2xl mb-12">
                            With <span className="italic font-semibold">Covenant Care</span> you and your family are insured with peace, dignity, and security — because every life deserves love and care.
                        </p>

                        <button
                            onClick={handleCloseProcessing}
                            className="hover:cursor-pointer bg-primary hover:bg-primary/90 text-white font-inter font-semibold px-12 py-3 rounded-lg text-[18px] transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999999] px-4">
            <div className="bg-[#E8DED2] rounded-2xl p-8 max-w-[1120px] w-full relative shadow-2xl max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-3xl md:text-5xl text-primary hover:text-primary/80 transition-colors hover:cursor-pointer"
                >
                    <IoMdClose />
                </button>

                <h2 className="font-archivo-black text-primary text-[20px] md:text-[32px] mb-8">
                    Onboarding: {planType} Care Plan
                </h2>

                {/* Step 1 */}
                <div className="mb-8">
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
                </div>

                {/* Step 2 */}
                <div className="mb-8">
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
                </div>

                {/* Step 3 */}
                <div className="mb-8">
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
                </div>

                {/* Step 4 */}
                <div className="mb-6 md:mb-12">
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
                </div>

                {/* Done Button */}
                <div className="flex justify-end">
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
                </div>
            </div>
        </div>
    );
};

export default OnboardingPopup;

