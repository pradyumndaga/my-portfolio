import * as React from 'react'
import { createRootRoute } from '@tanstack/react-router'
import { Dashboard } from '@/components/dashboard'

export const Route = createRootRoute({
    component: RootComponent,
})

export function RootComponent() {
    return (
        <React.Fragment>
            <Dashboard />
        </React.Fragment>
    )
}
