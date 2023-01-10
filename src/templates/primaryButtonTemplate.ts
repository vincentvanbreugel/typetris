import { html } from 'lit-html';

export const primaryButtonTemplate = (data: { text: string; action: () => void }) => {
    return html`<button
        type="button"
        @click=${data.action}
        class="w-full 
            uppercase 
            tracking-wider 
            py-3 
            px-6 
            bg-gradient-to-l 
            from-gray-600
            to-transparent
            hover:bg-gray-600 
            border-t-2 
            border-b-2 
            border-slate-100 
            text-slate-100 
            font-bold 
            transition 
            duration-200 
            ease-in-out"
    >
        ${data.text}
    </button>`;
};
