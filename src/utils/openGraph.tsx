import React, { useState, useEffect } from 'react';
import axios from 'axios';

export interface OgDataModel {
    title: string | null;
    description: string | null;
    image: string | null;
    url: string | null;
}
export const OpenGraphPreview = async ({ url }: { url: string }): Promise<OgDataModel> => {
    const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
    const html = response.data.contents;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute('content');
    const ogDescription = doc.querySelector('meta[property="og:description"]')?.getAttribute('content')
    const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content')
    const ogUrl = doc.querySelector('meta[property="og:url"]')?.getAttribute('content')
    return {
        title:ogTitle!,
        description:ogDescription!,
        image:ogImage!,
        url:ogUrl!,
    }

}


