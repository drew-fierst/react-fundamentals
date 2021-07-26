import { useMemo } from 'react';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';

const useRouter = () => {
    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    return useMemo(() => {
        return {
            // for convenience, add push(), replace() and pathname to the top level
            push: history.push,
            replace: history.replace,
            pathname: location.pathname,
            // merge params and query string into one object for convenience
            query: {
                ...queryString.parse(location.search),
                ...params
            },
            match,
            location,
            history
        }
    }, [params, location, history, match]);
};

export default useRouter;
