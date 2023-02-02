
export default function WithLoading({ isLoaded, isLoading, renderLoadingState, renderLoadedState, fetchData }) {
    // Loading hasnt started, but we have no data, let's start it and render LoadingState
    if (!isLoaded && !isLoading) {
        fetchData()
        return renderLoadingState()
    }

    // Loading has started, but we still have no data, let's render LoadingState
    if (isLoading) {
        return renderLoadingState()
    }

    // Normal case, data has finished loading, let's render LoadedState
    return renderLoadedState()
}
