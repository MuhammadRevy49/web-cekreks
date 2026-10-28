import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
    try {
        const { message } = await req.json();

        if (!message) {
            return NextResponse.json({ error: 'Pesan tidak boleh kosong' }, { status: 400 });
        }

        try {
            // Ubah model di dalam route.ts menjadi gemini-3.1-flash-lite
            const response = await ai.models.generateContent({
                model: 'gemini-3.1-flash-lite',
                contents: [
                    {
                        role: 'user',
                        parts: [
                            {
                                // Di dalam src/app/api/chat/route.ts
                                text: `Anda adalah CS Agent manusia yang ramah, santai, dan kasual untuk "Cekreks.id" (platform fotografi, wedding, graduation, dan event).
                                Aturan Ketat: 
                                1. JANGAN pernah mengulang kata sapaan seperti "Halo!" atau "Selamat datang" di setiap pesan jika sudah disapa sebelumnya.
                                2. Jawab langsung pada inti pertanyaan dengan singkat, padat, dan natural seperti sedang *chatting* di WhatsApp (maksimal 2-3 kalimat).
                                3. Jangan gunakan format penomoran (1., 2.) atau simbol markdown yang berlebihan. Buat mengalir secara natural.
                                4. Tanyakan detail dengan santai jika diperlukan (seperti lokasi/tanggal wisuda).
                                
                                Pertanyaan user: ${message}`
                            }
                        ]
                    }
                ],
            });

            const reply = response.text || "Maaf, saya sedang mengalami kendala. Silakan hubungi CS WhatsApp kami.";
            return NextResponse.json({ reply });

        } catch (apiError: any) {
            // Jika error 503 (High Demand), berikan respons cadangan yang ramah tanpa bikin web error
            if (apiError.status === 503 || apiError.code === 503) {
                return NextResponse.json({
                    reply: "Wah, antrean AI Agent sedang sangat padat saat ini! 😊 Untuk respon cepat seputar paket dan layanan Cekreks, silakan langsung hubungi CS WhatsApp manusia kami di bawah ya!"
                });
            }
            throw apiError;
        }

    } catch (error) {
        console.error('Error Gemini API:', error);
        return NextResponse.json({ error: 'Terjadi kesalahan pada server AI' }, { status: 500 });
    }
}