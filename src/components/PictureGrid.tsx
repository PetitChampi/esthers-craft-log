import React from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

export interface CraftItem {
  id: string;
  title: string;
  category: 'knitting' | 'crochet';
  imageUrl: string;
  description: string;
  images: string[];
}

interface PictureGridProps {
  items: CraftItem[];
  viewMode: 'grid' | 'list';
  onItemClick: (item: CraftItem) => void;
}

export default function PictureGrid({ items, viewMode, onItemClick }: PictureGridProps) {
  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => onItemClick(item)}
            className="flex gap-4 p-4 bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-20 h-20 flex-shrink-0">
              <ImageWithFallback
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-neutral-800 mb-1">{item.title}</h3>
              <p className="text-sm text-neutral-600 mb-2">{item.description}</p>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-500 text-primary-800 rounded-full capitalize">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 sm:gap-2">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onItemClick(item)}
          className="aspect-square cursor-pointer group overflow-hidden rounded-sm"
        >
          <ImageWithFallback
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

// Mock data for craft items
export const mockCraftItems: CraftItem[] = [
  {
    id: '1',
    title: 'Colorful Knitted Scarf',
    category: 'knitting',
    imageUrl: 'https://images.unsplash.com/photo-1706864685950-c7db14f24290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMHdvb2wlMjB5YXJuJTIwY3JhZnRzfGVufDF8fHx8MTc1NTk0NjkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A vibrant striped scarf knitted with soft wool yarn',
    images: ['https://images.unsplash.com/photo-1706864685950-c7db14f24290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMHdvb2wlMjB5YXJuJTIwY3JhZnRzfGVufDF8fHx8MTc1NTk0NjkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']
  },
  {
    id: '2',
    title: 'Crochet Baby Blanket',
    category: 'crochet',
    imageUrl: 'https://images.unsplash.com/photo-1632649027900-389e810204e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwaGFuZG1hZGUlMjBjcmFmdHN8ZW58MXx8fHwxNzU1OTQ2OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Soft pastel baby blanket with intricate crochet patterns',
    images: ['https://images.unsplash.com/photo-1632649027900-389e810204e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwaGFuZG1hZGUlMjBjcmFmdHN8ZW58MXx8fHwxNzU1OTQ2OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']
  },
  {
    id: '3',
    title: 'Knitting Needles & Wool',
    category: 'knitting',
    imageUrl: 'https://images.unsplash.com/photo-1595301408991-ce3b59fd4cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMG5lZWRsZXMlMjB3b29sfGVufDF8fHx8MTc1NTk0NjkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Natural wool yarn with wooden knitting needles',
    images: ['https://images.unsplash.com/photo-1595301408991-ce3b59fd4cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMG5lZWRsZXMlMjB3b29sfGVufDF8fHx8MTc1NTk0NjkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']
  },
  {
    id: '4',
    title: 'Crochet Hooks & Yarn',
    category: 'crochet',
    imageUrl: 'https://images.unsplash.com/photo-1627562625493-beb6008e3346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwaG9va3MlMjB5YXJufGVufDF8fHx8MTc1NTk0NjkyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Colorful yarn balls with crochet hooks ready for crafting',
    images: ['https://images.unsplash.com/photo-1627562625493-beb6008e3346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwaG9va3MlMjB5YXJufGVufDF8fHx8MTc1NTk0NjkyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']
  },
  {
    id: '5',
    title: 'Handmade Knitted Scarf',
    category: 'knitting',
    imageUrl: 'https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGtuaXR0ZWQlMjBzY2FyZnxlbnwxfHx8fDE3NTU5NDY5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Cozy knitted scarf with cable pattern',
    images: ['https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGtuaXR0ZWQlMjBzY2FyZnxlbnwxfHx8fDE3NTU5NDY5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']
  },
  {
    id: '6',
    title: 'Crochet Blanket',
    category: 'crochet',
    imageUrl: 'https://images.unsplash.com/photo-1675269605939-71cbac0e80b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmxhbmtldCUyMGhhbmRtYWRlfGVufDF8fHx8MTc1NTk0NjkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Multicolor granny square blanket',
    images: ['https://images.unsplash.com/photo-1675269605939-71cbac0e80b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYmxhbmtldCUyMGhhbmRtYWRlfGVufDF8fHx8MTc1NTk0NjkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']
  },
  {
    id: '7',
    title: 'Knitted Beanie Hat',
    category: 'knitting',
    imageUrl: 'https://images.unsplash.com/photo-1722322498026-ad9456b937d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMGhhdCUyMGJlYW5pZSUyMGhhbmRtYWRlfGVufDF8fHx8MTc1NTk0NjkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Warm winter beanie with ribbed pattern',
    images: ['https://images.unsplash.com/photo-1722322498026-ad9456b937d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMGhhdCUyMGJlYW5pZSUyMGhhbmRtYWRlfGVufDF8fHx8MTc1NTk0NjkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']
  },
  {
    id: '8',
    title: 'Crochet Amigurumi Toy',
    category: 'crochet',
    imageUrl: 'https://images.unsplash.com/photo-1723719121605-5623e3a4f538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYW1pZ3VydW1pJTIwdG95fGVufDF8fHx8MTc1NTk0NjkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Cute amigurumi toy with detailed stitching',
    images: ['https://images.unsplash.com/photo-1723719121605-5623e3a4f538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwYW1pZ3VydW1pJTIwdG95fGVufDF8fHx8MTc1NTk0NjkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']
  },
  {
    id: '9',
    title: 'Knitted Mittens',
    category: 'knitting',
    imageUrl: 'https://images.unsplash.com/photo-1579422539802-dc771d0f5636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGVkJTIwbWl0dGVucyUyMGdsb3Zlc3xlbnwxfHx8fDE3NTU5NDY5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Cozy winter mittens with fair isle pattern',
    images: ['https://images.unsplash.com/photo-1579422539802-dc771d0f5636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGVkJTIwbWl0dGVucyUyMGdsb3Zlc3xlbnwxfHx8fDE3NTU5NDY5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']
  },
  {
    id: '10',
    title: 'Crochet Doily',
    category: 'crochet',
    imageUrl: 'https://images.unsplash.com/photo-1597954424044-cef1e74a89ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwZG9pbHklMjBsYWNlfGVufDF8fHx8MTc1NTk0NjkzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Delicate lace doily with intricate patterns',
    images: ['https://images.unsplash.com/photo-1597954424044-cef1e74a89ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwZG9pbHklMjBsYWNlfGVufDF8fHx8MTc1NTk0NjkzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']
  },
  {
    id: '11',
    title: 'Knitted Sweater',
    category: 'knitting',
    imageUrl: 'https://images.unsplash.com/photo-1642853474532-9aca78f70629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGVkJTIwc3dlYXRlciUyMGNhcmRpZ2FufGVufDF8fHx8MTc1NTk0NjkzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Classic cable knit sweater in cream wool',
    images: ['https://images.unsplash.com/photo-1642853474532-9aca78f70629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGVkJTIwc3dlYXRlciUyMGNhcmRpZ2FufGVufDF8fHx8MTc1NTk0NjkzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']
  },
  {
    id: '12',
    title: 'Crochet Flower',
    category: 'crochet',
    imageUrl: 'https://images.unsplash.com/photo-1595301490405-0ae747be39f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwZmxvd2VyJTIwcGF0dGVybnxlbnwxfHx8fDE3NTU5NDY5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Beautiful crochet flower appliqué',
    images: ['https://images.unsplash.com/photo-1595301490405-0ae747be39f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwZmxvd2VyJTIwcGF0dGVybnxlbnwxfHx8fDE3NTU5NDY5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral']
  }
];
