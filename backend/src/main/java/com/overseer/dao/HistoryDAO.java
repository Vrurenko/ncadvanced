package com.overseer.dao;

import com.overseer.model.History;

import java.util.List;

/**
 *  The <code>HistoryDAO</code> interface represents access to {@link History} object in database.
 */
public interface HistoryDAO {

    /**
     * Returns all {@Link History} details by entity id.
     *
     * @param entityId entity id for which history is retrieving.
     * @return list of all {@Link History} details.
     */
    List<History> findAllForEntity(Long entityId);
}