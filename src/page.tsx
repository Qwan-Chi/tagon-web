import {
  PawPrint,
  CircleDollarSign,
  Rocket,
  X,
  MessageCircle,
  Send,
  Home,
  Pencil,
} from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="min-h-screen bg-violet-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${(i + 1) * 40}%`,
              height: `${(i + 1) * 40}%`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container max-w-2xl mx-auto px-4 py-16">
        {/* Avatar */}
        <div className="flex justify-center mb-8">
          <div className="rounded-full border-4 border-cream p-1 bg-white">
            <img
              src="https://utfs.io/f/UsAcULtQi4kTnYKxKQVbfAWOE6wLD0gHN8cYexaKqouSXCTi"
              alt="Avatar"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Terms */}
          <div className="space-y-6 text-white">
            <h1 className="text-4xl md:text-5xl text-orange-300 font-bold tracking-tight [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]">
              TERMS OF SERVICE
            </h1>
            <ul className="space-y-4 text-sm md:text-base [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]">
              <li>- 100% prepayment. PAYMENT: Paypal</li>
              <li>
                - The
                price may vary depending on the complexity of the character and the idea
              </li>
              <li>
                - You can
                only make edits at the sketch stage, as long as I haven&apos;t made any mistakes in the character.
              </li>
              <li>
                - Deadli
               ne: 1-4 months. If you need a drawing soon - for a surcharge 
               I can do the drawing in a short time. Clarify this issue with me
              </li>
              <li>- I&apos;m okay with payment plan (starting at $300)</li>
              <li>- Private work +100% to the cost</li>
              <li>- I do not offer any refunds</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <a
              href="http://x.com/tagonkrat"
              className="flex items-center justify-between p-4 rounded-full bg-black text-white hover:shadow-lg transition"
            >
              <span className="text-lg font-medium">X (Twitter)</span>
              <X className="h-6 w-6" />
            </a>

            <a
              href="https://vk.com/public184165368"
              className="flex items-center justify-between p-4 rounded-full bg-blue-600 text-white hover:shadow-lg transition"
            >
              <span className="text-lg font-medium">VK</span>
              <MessageCircle className="h-6 w-6" />
            </a>
            <a href="http://boosty.to/tagonkrat" className="flex items-center justify-between p-4 rounded-full bg-orange-400 text-white hover:shadow-lg transition">
              <span className="text-lg font-medium">Boosty</span>
              <Rocket className="h-6 w-6" />
            </a>
            <a
              href="http://patreon.com/c/TAGONKRAT"
              className="flex items-center justify-between p-4 rounded-full bg-orange-600 text-white hover:shadow-lg transition"
            >
              <span className="text-lg font-medium">Patreon</span>
              <CircleDollarSign className="h-6 w-6" />
            </a>   
            <a
              href="https://furaffinity.net/user/tagonkrat/"
              className="flex items-center justify-between p-4 rounded-full bg-orange-800 text-white hover:shadow-lg transition">
              <span className="text-lg font-medium">FurAffinity</span>
              <PawPrint className="h-6 w-6"/>
            </a>
           
    </div>
        </div>
      </div>
    </div>
  );
}

