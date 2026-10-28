'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, Send, PhoneCall } from 'lucide-react';

interface Message {
    sender: 'ai' | 'user';
    text: string;
}

export default function FloatingAIAgent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            sender: 'ai',
            text: 'Halo! 👋 Saya Cekreks CS Agent. Ada yang bisa saya bantu seputar layanan fotografi, photobooth AI, atau paket harga kami?',
        },
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isTyping, isOpen]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userText = inputMessage;
        setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
        setInputMessage('');
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            setMessages((prev) => [
                ...prev,
                {
                    sender: 'ai',
                    text: 'Maaf, pengetahuan saya terbatas untuk pertanyaan tersebut. Namun, Customer Service manusia kami siap memberikan informasi detail dan membantu kebutuhan khusus acara Anda!',
                },
            ]);
        }, 1500);
    };

    return (
        <>
            {/* Backdrop untuk klik di luar modal */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 z-40 bg-transparent"
                />
            )}

            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
                {/* Tooltip Pesan: Hanya muncul saat di-hover dan chat tertutup */}
                {!isOpen && isHovered && (
                    <div className="relative mb-3 flex items-center rounded-xl bg-[#121124] px-4 py-2.5 text-sm text-white shadow-xl border border-purple-500/30 animate-fade-in">
                        <span>Ada pertanyaan? Tanya AI kami!</span>
                        <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-[#121124] border-r border-b border-purple-500/30"></div>
                    </div>
                )}

                {/* Jendela Chat Box */}
                {isOpen && (
                    <div className="mb-4 flex h-[500px] w-[360px] flex-col rounded-2xl bg-[#131126] border border-purple-500/30 shadow-2xl overflow-hidden transition-all duration-300">
                        {/* Header Chat */}
                        <div className="flex items-center justify-between bg-[#1a1738] px-4 py-3.5 border-b border-purple-500/20">
                            <div className="flex items-center space-x-3">
                                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#FF512F] to-[#DD2476] text-white shadow-md overflow-hidden">
                                    <Image
                                        src="/images/cs/csagent.png"
                                        alt="CS Agent"
                                        fill
                                        className="object-cover"
                                    />
                                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-[#1a1738] z-10"></span>
                                </div>
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <h3 className="font-bold text-white text-sm">CEKREKS CS Agent</h3>
                                        <span className="rounded bg-purple-900/80 px-1.5 py-0.5 text-[10px] font-semibold text-pink-300 border border-purple-500/30">
                                            ONLINE
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-400">Asisten Layanan Fotografi</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-lg p-1.5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Area Pesan dengan Custom Scrollbar */}
                        <div
                            className="flex-1 overflow-y-auto p-4 space-y-3.5 text-sm"
                            style={{
                                scrollbarWidth: 'thin',
                                scrollbarColor: '#a855f7 #131126',
                            }}
                        >
                            <style jsx>{`
                div::-webkit-scrollbar {
                  width: 6px;
                }
                div::-webkit-scrollbar-track {
                  background: #131126;
                }
                div::-webkit-scrollbar-thumb {
                  background-color: #a855f7;
                  border-radius: 20px;
                }
              `}</style>

                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${msg.sender === 'user'
                                            ? 'bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-white rounded-br-sm'
                                            : 'bg-[#211d42] text-gray-200 rounded-bl-sm border border-purple-500/20'
                                            }`}
                                    >
                                        <p className="leading-relaxed">{msg.text}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Indikator Loading Titik Tiga (Typing Animation) */}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-[#211d42] text-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 border border-purple-500/20 shadow-sm flex items-center space-x-1.5">
                                        <span className="h-2 w-2 rounded-full bg-pink-400 animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="h-2 w-2 rounded-full bg-pink-400 animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="h-2 w-2 rounded-full bg-pink-400 animate-bounce"></span>
                                    </div>
                                </div>
                            )}

                            {/* Tombol Pintasan WhatsApp */}
                            <div className="pt-2">
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center space-x-2 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2.5 px-4 text-white font-medium shadow-lg transition-all"
                                >
                                    <PhoneCall size={16} />
                                    <span>Hubungi CS Manusia (WhatsApp)</span>
                                </a>
                            </div>

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Chat Footer */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-[#1a1738] border-t border-purple-500/20 flex items-center space-x-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Tanya seputar paket/layanan..."
                                className="flex-1 rounded-xl bg-[#110f24] px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-white/10"
                            />
                            <button
                                type="submit"
                                className="flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FF512F] to-[#DD2476] p-2.5 text-white hover:opacity-90 shadow-md transition-opacity"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                )}

                {/* Tombol Utama Floating dengan Gambar Avatar CS yang Lebih Besar */}
                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="flex items-center space-x-3 rounded-full bg-gradient-to-r from-[#FF512F]/90 via-[#EC38BC]/90 to-[#7303C0]/90 px-5 py-3 text-white font-semibold shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20"
                >
                    {isOpen ? (
                        <>
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                                <X size={18} />
                            </div>
                            <span>Tutup CS Agent</span>
                        </>
                    ) : (
                        <>
                            {/* Pembungkus gambar diperbesar (h-12 w-12 / 48px) tapi tetap rapi di dalam tombol */}
                            <div className="relative h-8 w-8 -my-2 -ml-2 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/40 shadow-md">
                                <Image
                                    src="/images/cs/csagent.png"
                                    alt="CS Avatar"
                                    fill
                                    className="object-cover scale-130 object-top"
                                />
                            </div>
                            <span className="tracking-wide">Tanya CS Agent</span>
                        </>
                    )}
                </button>
            </div>
        </>
    );
}