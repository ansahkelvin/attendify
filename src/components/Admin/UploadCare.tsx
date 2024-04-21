"use client"

import * as LR from '@uploadcare/blocks';
import {UploadCtxProvider} from '@uploadcare/blocks';

import React, {useEffect, useRef} from "react";
import {useRouter} from "next/navigation";

type Props = {
    onUpload: (e: string) => any
}

LR.registerBlocks(LR);

const UploadCare = ({ onUpload }: Props) => {
    const router = useRouter();
    const ctxProviderRef = useRef<typeof UploadCtxProvider.prototype & UploadCtxProvider>(null)
    useEffect(() => {
        const handleUpload = async (e: any) => {
            const file = await onUpload(e.detail.cdnUrl);
            if (file) {
                router.refresh();
            }
        }
        ctxProviderRef.current!.addEventListener('file-upload-success', handleUpload)

    }, [])
    return (
        <div>
            <lr-config
                ctx-name="my-uploader"
                pubkey="da3f50b11991c80b3074"
            />

            <lr-file-uploader-regular
                ctx-name="my-uploader"
                css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${LR.PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
            />

            <lr-upload-ctx-provider
                ctx-name="my-uploader"
                ref={ctxProviderRef}
            />

        </div>)
}

export default UploadCare