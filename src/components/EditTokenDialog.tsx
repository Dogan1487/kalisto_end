import { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Edit2 } from 'lucide-react';
import { Token, useTokensStore } from '@/store/tokensStore';
import { TOKEN_TAGS, TOKEN_TAG_OPTIONS } from '@/lib/constants';
import { Checkbox } from '@/components/ui/checkbox';

interface EditTokenDialogProps {
  token: Token;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditTokenDialog({ token, open, onOpenChange }: EditTokenDialogProps) {
  const { user } = usePrivy();
  const updateToken = useTokensStore((state) => state.updateToken);
  const isAdmin = user?.email?.address === 'unalltaha@gmail.com';
  const [formData, setFormData] = useState({
    name: token.name,
    image: token.image,
    emoji: token.emoji,
    description: token.description || '',
    tags: token.tags || [],
    decimals: token.decimals || 9,
    socialLinks: {
      twitter: token.socialLinks?.twitter || '',
      telegram: token.socialLinks?.telegram || '',
      website: token.socialLinks?.website || '',
    }
  });

  // Check if user is admin
  if (!isAdmin) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateToken(token.id, formData);
    onOpenChange(false);
  };

  const toggleTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t: string) => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white/60 hover:text-white"
          onClick={() => onOpenChange(true)}
        >
          <Edit2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#F7E436] text-black max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Token Düzenle</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">İsim</label>
            <Input
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="bg-black/10 border-0"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Görsel URL</label>
            <Input
              value={formData.image}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, image: e.target.value }))
              }
              className="bg-black/10 border-0"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Emoji</label>
            <Input
              value={formData.emoji}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, emoji: e.target.value }))
              }
              className="bg-black/10 border-0"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Açıklama</label>
            <Textarea
              value={formData.description}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, description: e.target.value }))
              }
              className="bg-black/10 border-0"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Token Etiketleri</label>
            <div className="space-y-2">
              {TOKEN_TAG_OPTIONS.map((tag) => (
                <div key={tag} className="flex items-center space-x-2">
                  <Checkbox
                    id={tag}
                    checked={formData.tags.includes(tag)}
                    onCheckedChange={() => toggleTag(tag)}
                  />
                  <label
                    htmlFor={tag}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {tag}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Twitter</label>
            <Input
              value={formData.socialLinks.twitter}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  socialLinks: { ...prev.socialLinks, twitter: e.target.value },
                }))
              }
              className="bg-black/10 border-0"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Telegram</label>
            <Input
              value={formData.socialLinks.telegram}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  socialLinks: { ...prev.socialLinks, telegram: e.target.value },
                }))
              }
              className="bg-black/10 border-0"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Website</label>
            <Input
              value={formData.socialLinks.website}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  socialLinks: { ...prev.socialLinks, website: e.target.value },
                }))
              }
              className="bg-black/10 border-0"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Token Ondalık Sayısı</label>
            <Input
              type="number"
              min="0"
              max="18"
              value={formData.decimals}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  decimals: parseInt(e.target.value),
                }))
              }
              className="bg-black/10 border-0"
              required
            />
            <p className="text-xs text-black/60">
              Token'in ondalık hassasiyeti (genellikle 9 veya 6)
            </p>
          </div>

          <Button type="submit" className="w-full bg-black text-[#F7E436] hover:bg-black/80">
            Kaydet
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
